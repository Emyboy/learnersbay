'use client';
import React, { useEffect, useState } from 'react';
import ChatAppLeft from './ChatLeft/ChatAppLeft';
// import ChatBody from './ChatBody/ChatBody';
import dynamic from 'next/dynamic';

const ChatBody = dynamic(() => import('./ChatBody/ChatBody'));
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

import { AppStore, CommunityDependencies } from '../../interface';
import { useSelector } from 'react-redux';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ChatAppRight from './ChatRight/ChatAppRight';
import ChatAppLeftCommunities from './ChatLeft/ChatAppLeftCommunities';

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
    const { connected } = useSelector((state: AppStore) => state.view);
    const router = useRouter();
    const { community_uuid, channel_uuid } = router.query;
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    if (!connected || !show) {
        // todo - improve this
        return (
            <Center
                display={'flex'}
                justifyContent="center"
                alignItems={'center'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                right={'0'}
                bottom={'0'}>
                <Text>Reconnecting...</Text>
            </Center>
        );
    }

    return (
        <>
            <Flex h='100vh' maxH={'100vh'} id='root' className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
                <LeftNav communityDependency={communityDependency} community_uuid={community_uuid} />
                <Flex flexDirection={'column'} as='main' flex={1} className="main-content- chat-app mt-0 ">
                    {channel_uuid ? (
                        <>
                            <Box h='61px'>
                                <ChatHeader />
                            </Box>
                            <Box flex={1} p='3'>
                                <ChatBody messages={unread_messages} />
                            </Box>
                            <ChatInput channelDependency={channelDependency} />
                        </>
                    ) : (
                        <BodyTips />
                    )}
                </Flex>
                <div id="x-teleport-target">
                    <div>
                        <ChatAppRight />
                    </div>
                </div>
            </Flex>
            {/* <div
                id="root"
                className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
                <div className="sidebar print:hidden">
                    <ChatAppLeftCommunities />
                    <div className="sidebar-panel">
                        <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
                            <ChatAppLeft
                                communityDependency={communityDependency}
                                community_id={community_uuid}
                            />
                        </div>
                    </div>
                </div>
                <main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80-">
                    {channel_uuid ? (
                        <>
                            <ChatHeader />
                            <ChatBody messages={unread_messages} />
                            <ChatInput channelDependency={channelDependency} />
                        </>
                    ) : (
                        <BodyTips />
                    )}
                </main>
            </div>
            <div id="x-teleport-target">
                <div>
                    <ChatAppRight />
                </div>
            </div> */}
        </>
    );
}

const LeftNav = ({ communityDependency, community_uuid }: { community_uuid: string | string[] | undefined, communityDependency: CommunityDependencies | undefined }) => {

    const { show_left_panel } = useSelector((state: AppStore) => state.view);

    return <Flex className="sidebar print:hidden" zIndex={100} position={['fixed', 'inherit']} height={["100vh"]} left={[show_left_panel ? 0 : -400]}>
        <Box w="5rem"> <ChatAppLeftCommunities /></Box>
        <Box className="sidebar-panel-" bg='green.100' w="15rem">
            <div className="flex h-full grow flex-col dark:bg-navy-750">
                <ChatAppLeft
                    communityDependency={communityDependency}
                    community_id={community_uuid}
                />
            </div>
        </Box>
    </Flex>
}

const BodyTips = () => {
    return (
        <Box className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm" ></Box>
    );
};
