import {Text} from '@chakra-ui/react';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {CommunityDependencies} from '../../../interface';
import {ChannelData} from '../../../interface/community.interface';
import EachConversation from './EachConversation/EachConversation';
// const qs = require('qs')

type Props = {
    communityDependency?: CommunityDependencies;
};

export default function ChatAppLeftList({communityDependency}: Props) {
    const [list, setList] = useState([]);

    return (
        <div className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
            {communityDependency?.channels?.map(channel => {
                return (
                    <Link
                        href={`/chat/${communityDependency.community.uuid}/${channel.uuid}`}
                        className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                        key={channel.uuid}>
                        <Text fontWeight={'bold'}># {channel.slug}</Text>
                    </Link>
                );
            })}
            {list.map((conversation, index) => {
                return (
                    <EachConversation
                        key={`conv-${index}`}
                        data={conversation}
                    />
                );
            })}
        </div>
    );
}
