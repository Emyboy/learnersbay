'use client';
import React from 'react';
import ChatAppLeft from './ChatLeft/ChatAppLeft';
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatAppRight from './ChatRight/ChatAppRight';
import {ChannelData, CommunityData} from '../../interface/community.interface';
import {CommunityDependencies} from '../../interface';

type Props = {
    communityDependency?: CommunityDependencies;
    community_id?: string;
    unread_messages?: any[];
};

export default function ChatApp({
    community_id,
    communityDependency,
    unread_messages,
}: Props) {
    return (
        <div className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <ChatAppLeft
                community_id={community_id}
                communityDependency={communityDependency}
            />
            <main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80">
                <ChatHeader />
                <ChatBody messages={unread_messages} />
                <ChatInput />
            </main>
            <ChatAppRight />
        </div>
    );
}
