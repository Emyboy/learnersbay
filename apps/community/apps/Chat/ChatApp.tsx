'use client';
import React from 'react';
import ChatAppLeft from './ChatLeft/ChatAppLeft';
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatAppRight from './ChatRight/ChatAppRight';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router';

type Props = {
    community_id?: string
};

export default function ChatApp({community_id}: Props) {
   

    return (
        <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <ChatAppLeft community_id={community_id} />
            <main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80">
                <ChatHeader />
                <ChatBody />
                <ChatInput />
            </main>
            <ChatAppRight />
        </div>
    );
}
