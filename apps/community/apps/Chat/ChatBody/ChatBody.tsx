'use client';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import {setChatState} from '../../../redux/actions/chat.action';
import {socket} from '../../../utils/LiveConnect';
import IncomingChat from './EachChat/IncomingChat';

type Props = {
    messages?: any[];
};

socket.on('message:create', (data: any) => {
    console.log(`MESSAGE CREATED`, data);
});
socket.on('message:update', (data: any) => {
    console.log(`MESSAGE UPDATED`, data);
});

export default function ChatBody({messages}: Props) {
    const {chat_list} = useSelector((state: AppStore) => state.chat);

    useEffect(() => {
        setChatState({
            chat_list: messages,
        });
        return () => {
            setChatState({
                chat_list: [],
            });
        };
    }, [messages]);

    return (
        <div className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm">
            {chat_list?.map(message => {
                return <IncomingChat message={message} />;
            })}
            {/* <ChatDayCategory />
			<IncomingChat />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<ChatDayCategory />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<ChatDayCategory />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<ChatDayCategory />
			<IncomingChat />
			<IncomingChat /> */}
        </div>
    );
}
