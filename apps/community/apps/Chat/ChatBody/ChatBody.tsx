'use client';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import {setChatState} from '../../../redux/actions/chat.action';
import {socket} from '../../../utils/LiveConnect';
import {useRouter} from 'next/router';
import {API} from '../../../utils/API.utils';
import {MessageData} from '../../../interface/message.interface';
import moment from 'moment';
import ChatDayContainer from './Containers/ChatDayContainer';
import { Box } from '@chakra-ui/react';

type Props = {
    messages?: any[];
};

socket.on('message:create', (data: any) => {
    // console.log(`MESSAGE CREATED`, data);
    setChatState({
        incoming_message_id: data.id,
    });
});
socket.on('message:update', (data: any) => {
    console.log(`MESSAGE UPDATED`, data);
});

export default function ChatBody({messages}: Props) {
    const {incoming_message_id} = useSelector((state: AppStore) => state.chat);
    const {community_memberships} = useSelector(
        (state: AppStore) => state.community,
    );
    const {connected} = useSelector((state: AppStore) => state.view);
    const [message_list, setMessageList] = useState<MessageData[]>([]);
    const [formattedMessageList, setFormattedMessageList] = useState(null);
    const [ready, setReady] = useState(false);
    const router = useRouter();
    const {channel_uuid} = router.query;

    const getMoreChat = async (channel_uuid: string | string[] | undefined) => {
        try {
            const chatList = message_list;
            const lastChat = chatList[chatList.length - 1];
            const res = await API(
                `/messages/more/${channel_uuid}/${lastChat?.id}`,
            );
            return res.data;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        if (messages && messages.length > 0) {
            // todo - filter out messages that are not on the channel
            setMessageList(messages);
        }
        return () => {
            setMessageList([]);
        };
    }, [messages]);

    useEffect(() => {
        (async () => {
            if (incoming_message_id) {
                const new_msgs = await getMoreChat(channel_uuid);
                const msgs = message_list;
                setMessageList([...msgs, ...new_msgs]);
            }
        })();
    }, [incoming_message_id]);

    useEffect(() => {
        // chat list will update once user comes back online
        setChatState({
            incoming_message_id: 1,
        });
    }, [connected]);

    useEffect(() => {
        var element = document.querySelector('#chat-end');
        if (element) {
            element?.scrollIntoView();
        }
        setReady(true);
    }, []);

    const formatMessage = (_message_list:any[]) => {
            let output: any = {};
            _message_list.forEach((message: MessageData) => {
                const dayCategory = message.createdAt.split('T')[0];
                output = {...output, [dayCategory]: []};
            });
            _message_list.forEach((message: MessageData) => {
                const dayCategory = message.createdAt.split('T')[0];
                output[dayCategory].push(message);
            });
            // console.log(message_list);
            // console.log(output);
            setFormattedMessageList(output);
            // console.log('LIST FORMATTED', output);
            return output;
    };

    useEffect(() => {
        formatMessage(message_list);
    }, [message_list]);

    if (
        community_memberships.length === 0 ||
        !ready 
        // ||
        // !formattedMessageList ||
        // (formattedMessageList && Object.keys(formattedMessageList).length === 0)
    ) {
        return null;
    } else
        return (
            <Box
                flex={1}
                className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm"
                style={{overflowX: 'hidden'}}>
                {formattedMessageList &&
                    Object.keys(formattedMessageList).map(val => {
                        var dt = moment(val, 'YYYY-MM-DD HH:mm:ss');
                        return (
                            <ChatDayContainer
                                dayName={dt.format('dddd')}
                                dayMessages={formattedMessageList[val]}
                            />
                        );
                    })}
                {/* <ChatDayCategory />
                {message_list?.map(message => {
                    return <EachChatContainer message={message} key={message.createdAt} />;
                })} */}
                <div id="chat-end" />
            </Box>
        );
}
