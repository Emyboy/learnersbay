import {Text} from '@chakra-ui/react';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {CommunityDependencies} from '../../../interface';
import EachConversation from './EachConversation/EachConversation';
import _Accordion from '../../../atoms/Accordion/_Accordion';
import {ConversationData} from '../../../interface/chat.interface';

type Props = {
    communityDependency?: CommunityDependencies;
};

export default function ChatAppLeftList({communityDependency}: Props) {
    const [list, setList] = useState<ConversationData[] | undefined>(
        communityDependency?.conversations,
    );

    return (
        <div className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
            <ul className="space-y-1.5 px-2 font-inter text-xs+ font-medium">
                <EachShortcut />
                <EachShortcut />
                <EachShortcut />
            </ul>
            <_Accordion title="Channels">
                {communityDependency?.channels?.map(channel => {
                    return (
                        <Link
                            href={`/chat/community/${communityDependency.community.uuid}/${channel.uuid}`}
                            className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            key={channel.uuid}>
                            <Text fontWeight={'bold'}># {channel.slug}</Text>
                        </Link>
                    );
                })}
            </_Accordion>
            <_Accordion title="Direct Messages">
                {list &&
                    list.map((conversation, index) => {
                        return (
                            <EachConversation
                                key={`conv-${index}`}
                                data={conversation}
                            />
                        );
                    })}
            </_Accordion>
        </div>
    );
}

const EachShortcut = () => {
    return (
        <li>
            <a
                className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                href="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span className="text-slate-800 dark:text-navy-100">
                    Shared Folders
                </span>
            </a>
        </li>
    );
};
