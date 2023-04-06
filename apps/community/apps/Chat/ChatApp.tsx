'use client';
import React from 'react';
import ChatAppLeft from './ChatLeft/ChatAppLeft';
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

import {AppStore, CommunityDependencies} from '../../interface';
import {useSelector} from 'react-redux';
import {Box, Text} from '@chakra-ui/react';
import {useRouter} from 'next/router';

type Props = {
    communityDependency?: CommunityDependencies;
    unread_messages?: any[];
    channelDependency?: any;
};

export default function ChatApp({
    communityDependency,
    unread_messages,
    channelDependency,
}: Props) {
    const {connected} = useSelector((state: AppStore) => state.view);
    const router = useRouter();
    const {community_uuid} = router.query;

    if (!connected) {
        return (
            <Box
                display={'flex'}
                justifyContent="center"
                alignItems={'center'}
                h="100vh"
                w="100vh">
                <Text>Reconnecting...</Text>
            </Box>
        );
    }

    return (
        <div>
            <ChatAppLeft
                community_id={community_uuid}
                communityDependency={communityDependency}
            />
            <main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80">
                <ChatHeader />
                <ChatBody messages={unread_messages} />
                <ChatInput channelDependency={channelDependency} />
            </main>
            {/* <ChatAppRight /> */}
        </div>
    );
}
