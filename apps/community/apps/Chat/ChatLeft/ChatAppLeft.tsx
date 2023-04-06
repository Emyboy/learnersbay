import React from 'react';
import {CommunityDependencies} from '../../../interface';
import {ChannelData} from '../../../interface/community.interface';
import ChatAppLeftCommunities from './ChatAppLeftCommunities';
import ChatAppLeftHeader from './ChatAppLeftHeader';
import ChatAppLeftList from './ChatAppLeftList';
import ChatAppLeftSearch from './ChatAppLeftSearch';

type Props = {community_id?: any; communityDependency?: CommunityDependencies};

export default function ChatAppLeft({
    community_id,
    communityDependency,
}: Props) {
    return (
        <div className="sidebar print:hidden">
            <ChatAppLeftCommunities />
            {community_id && (
                <>
                    <div className="sidebar-panel">
                        <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
                            <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
                                <ChatAppLeftHeader />

                                <button className="btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex h-[calc(100%-4.5rem)] grow flex-col">
                                <ChatAppLeftSearch />
                                <ChatAppLeftList
                                    communityDependency={communityDependency}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
