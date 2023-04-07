'use client';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import {setChatState} from '../../../redux/actions/chat.action';
import {socket} from '../../../utils/LiveConnect';
import {useRouter} from 'next/router';
import {API} from '../../../utils/API.utils';
import EachChatContainer from './EachChat/EachChatContainer';
import ChatDayCategory from './ChatDayCategory';

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
    const [message_list, setMessageList] = useState<any[]>([]);
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

    if (community_memberships.length === 0) {
        return null;
    } else
        return (
            <div
                className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm"
                style={{overflowX: 'hidden'}}>
                <ChatDayCategory />
                {message_list?.map(message => {
                    // todo - add key
                    return <EachChatContainer message={message} />;
                })}
                <ChatDayCategory />
                <div id="chat-end" />
            </div>
        );
}
