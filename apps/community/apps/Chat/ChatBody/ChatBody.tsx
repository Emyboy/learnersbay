'use client';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import {formatMessage, setChatState} from '../../../redux/actions/chat.action';
import {socket} from '../../../utils/LiveConnect';
import {useRouter} from 'next/router';
import {MessageData} from '../../../interface/message.interface';
import moment from 'moment';
import ChatDayContainer from './Containers/ChatDayContainer';
import {Box} from '@chakra-ui/react';
import store from '../../../redux/store/store';

type Props = {
    messages?: any[];
};

socket.on('message:update', (data: any) => {
    console.log(`MESSAGE UPDATED`, data);
});
socket.on('createMessage', (data: MessageData) => {
    const messageList: MessageData[] = store.getState().chat.channel_messages;
    const messageExists = messageList.filter(x => x.uuid === data.uuid)[0];
    if (!messageExists) {
        setChatState({
            channel_messages: [...messageList, data],
        });
    }
});

export default function ChatBody({messages}: Props) {
    const {channel_messages} = useSelector((state: AppStore) => state.chat);
    const {community_memberships} = useSelector(
        (state: AppStore) => state.community,
    );
    const {connected} = useSelector((state: AppStore) => state.view);

    const [formattedMessageList, setFormattedMessageList] = useState(null);

    useEffect(() => {
        if (messages) {
            setChatState({
                channel_messages: messages,
            });
        }
        return () => {
            // create cleanup action
            setChatState({
                channel_messages: [],
            });
        };
    }, [messages]);

    useEffect(() => {
        // todo - find more messages
    }, [connected]);

    useEffect(() => {
        setFormattedMessageList(
            formatMessage(channel_messages.sort((a, b) => a.id - b.id)),
        );
    }, [channel_messages]);

    if (
        community_memberships.length === 0
        // || !ready
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
                <Box mt="5" id="chat-end" />
            </Box>
        );
}
