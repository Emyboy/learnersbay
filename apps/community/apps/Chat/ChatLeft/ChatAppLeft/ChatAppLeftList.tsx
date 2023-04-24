import {Text, Icon, Button, Box, Flex} from '@chakra-ui/react';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {CommunityDependencies} from '../../../../interface';
// import EachConversation from './EachConversation/EachConversation';
import dynamic from 'next/dynamic';
import {RxPlus, RxFile} from 'react-icons/rx';

const EachConversation = dynamic(
    () => import('../EachConversation/EachConversation'),
);
import _Accordion from '../../../../atoms/Accordion/_Accordion';
import {ConversationData} from '../../../../interface/chat.interface';
import CreateChannelPopup from '../../../../components/Popups/CreateChannelPopup';
import {ChannelData} from '../../../../interface/community.interface';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import EachShortcut from './EachShortcut';
import { FiBell, FiUsers, FiDatabase, FiShoppingCart } from 'react-icons/fi';
import {TbMoneybag} from 'react-icons/tb';
import {setCommunityState} from '../../../../redux/actions/community.action';

type Props = {
    communityDependency?: CommunityDependencies;
};

export default function ChatAppLeftList({communityDependency}: Props) {
    const [conversationList, setConversationList] = useState<
        ConversationData[] | undefined
    >(communityDependency?.conversations);
    const [channelList, setChannelList] = useState<ChannelData[] | undefined>(
        [],
    );
    const [addChannel, setAddChannel] = useState(false);
    const router = useRouter();
    const {channel_uuid, community_uuid} = router.query;

    useEffect(() => {
        setChannelList(communityDependency?.channels);
    }, [communityDependency]);

    useEffect(() => {
        // clean up
        if (channel_uuid) {
            channelList?.forEach((channel, index) => {
                if (channel.uuid === channel_uuid) {
                    setCommunityState({
                        active_channel: channelList[index],
                    });
                }
            });
        }
        return () => {
            setCommunityState({
                active_channel: null,
            });
        };
    }, [channel_uuid, channelList]);

    if (!channelList) {
        return null;
    }

    return (
        <Box
            pb="100px"
            className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
            <_Accordion title="Pages" defaultOpen={channelList.length < 10}>
                <ul className="space-y-1.5 px-2 font-inter text-xs+ font-medium">
                    <EachShortcut
                        name="Products"
                        icon={FiShoppingCart}
                        url={`/chat/community/${community_uuid}`}
                    />
                    <EachShortcut
                        name="Files"
                        icon={RxFile}
                        url={`/chat/community/${community_uuid}`}
                    />
                    <EachShortcut
                        name="Logs"
                        icon={FiDatabase}
                        url={`/chat/community/${community_uuid}`}
                    />
                    <EachShortcut
                        name="Earnings"
                        icon={TbMoneybag}
                        url={`/chat/community/${community_uuid}`}
                    />
                    <EachShortcut
                        name="Activities"
                        icon={FiBell}
                        url={`/chat/community/${community_uuid}`}
                    />
                    <EachShortcut
                        name="Members"
                        icon={FiUsers}
                        url={`/chat/community/${community_uuid}`}
                    />
                </ul>
            </_Accordion>
            <_Accordion title="Channels">
                {channelList?.map(channel => {
                    return (
                        <Link
                            onClick={() =>
                                setCommunityState({
                                    active_channel: channel,
                                })
                            }
                            href={`/chat/community/${communityDependency?.community?.uuid}/${channel.uuid}`}
                            className={classNames(
                                'flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600 ',
                                {
                                    'dark:bg-navy-500':
                                        channel.uuid === channel_uuid,
                                },
                            )}
                            key={channel.uuid}>
                            <Text fontWeight={'bold'} className="line-clamp-1">
                                # {channel.name}
                            </Text>
                        </Link>
                    );
                })}
                <CreateChannelPopup
                    show={addChannel}
                    onClose={() => setAddChannel(false)}
                    onSubmit={(e: any) => setChannelList([...channelList, e])}
                />
                <div
                    onClick={() => setAddChannel(true)}
                    className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600">
                    <Text fontWeight={'thin'}>
                        <Icon as={RxPlus} /> Add Channel
                    </Text>
                </div>
            </_Accordion>
            <_Accordion title="Direct Messages">
                {conversationList &&
                    conversationList.map((conversation, index) => {
                        return (
                            <EachConversation
                                key={`conv-${index}`}
                                data={conversation}
                            />
                        );
                    })}
            </_Accordion>
        </Box>
    );
}
