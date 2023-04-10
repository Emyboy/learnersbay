import {Link} from '@chakra-ui/next-js';
import {Icon} from '@chakra-ui/react';
import {Tooltip} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import {CommunityData} from '../../../interface/community.interface';
import {RxPlus} from 'react-icons/rx';
import classNames from 'classnames';
import Globals from '../../../Globals';

type Props = {};

export default function ChatAppLeftCommunities({}: Props) {
    const {community_list} = useSelector((state: AppStore) => state.community);
    const router = useRouter();
    const {community_uuid} = router.query;
    const {user} = useSelector((state: AppStore) => state.auth);

    return (
        <div className="main-sidebar">
            <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
                <div className="flex pt-4">
                    <Link href="/">
                        <img
                            className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                            src="/assets/images/app-logo.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
                    {community_list.map(item => {
                        return (
                            <EachCommunity
                                key={item.slug + '-' + item.id}
                                data={item}
                                isActive={item.uuid === community_uuid}
                            />
                        );
                    })}
                    <Tooltip
                        label={'Add Community'}
                        placement="right"
                        fontSize="md">
                        <Link
                            href="/"
                            className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 bg-img">
                            <Icon as={RxPlus} fontSize="20px" />
                        </Link>
                    </Tooltip>
                </div>
                <div className="flex flex-col items-center space-y-3 py-3">
                    <a
                        href="form-layout-5.html"
                        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-opacity="0.3"
                                fill="currentColor"
                                d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"></path>
                            <path
                                fill="currentColor"
                                d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"></path>
                        </svg>
                    </a>

                    <div
                        x-data="usePopper({placement:'right-end',offset:12})"
                        className="flex">
                        <button x-ref="popperRef" className="avatar h-12 w-12">
                            <img
                                className="rounded-full"
                                src={user?.avatar_url}
                                alt="avatar"
                            />
                            <span className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const EachCommunity = ({
    data,
    isActive,
}: {
    data: CommunityData;
    isActive: boolean;
}) => {
    return (
        <Tooltip label={data.name} placement="right" fontSize="md">
            <Link
                href={`/chat/community/${data.uuid}`}
                outlineColor="theme"
                borderWidth={isActive ? '4px' : '0px'}
                borderColor="theme"
                className={
                    'flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 bg-img'
                }
                style={{
                    backgroundImage: `url(${
                       data.thumbnail
                    })`,
                }}></Link>
        </Tooltip>
    );
};
