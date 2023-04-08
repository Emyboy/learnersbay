import {Box, Button, Center, Icon} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {CommunityData} from '../../interface/community.interface';
import {RxPlusCircled} from 'react-icons/rx';
import Cookies from 'js-cookie';

type Props = {
    list: CommunityData[];
};

export default function ChannelSelector({list}: Props) {
    const logout = () => {
        Cookies.remove('auth_token');
        window.location.reload();
    };

    return (
        <>
            <Box w={['95vw', '50vw']}>
                <Box mb="16" className="text-center ">
                    <img
                        className="mx-auto h-16 w-16"
                        src="/assets/images/app-logo.svg"
                        alt="logo"
                    />
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                            Enter your favorite community
                        </h2>
                        <p className="text-slate-400 dark:text-navy-300">
                            Select the communities you'd like to enter or create
                            a new one.
                        </p>
                    </div>
                </Box>
                <Center>
                    <Button
                        w={['100%','60%']}
                        mb="8"
                        py="6"
                        px="4"
                        className="card flex-row justify-between space-x-2  ">
                        <div className="flex flex-1 flex-row justify-between align-items-center">
                            <h1
                                style={{lineHeight: 'revert'}}
                                className="text-slate-700 focus:text-primary dark:text-navy-100 hover:border-primary dark:focus:text-accent-light text-xl">
                                Create New Community
                            </h1>
                            <Icon
                                as={RxPlusCircled}
                                className="fa-solid fa-paper-plane h-7 w-7"
                            />
                        </div>
                    </Button>
                </Center>
                {list.map(item => {
                    return <EachCommunity key={item.uuid} data={item} />;
                })}
            </Box>
           
        </>
    );
}

const EachCommunity = ({data}: {data: CommunityData}) => {
    return (
        <Link href={`/`}>
            <div className="card flex-row justify-between space-x-2 p-2.5 mb-10">
                <img
                    src={data.thumbnail}
                    className="h-28 w-28 rounded-lg object-cover object-center"
                    alt="image"
                />
                <div className="flex flex-1 flex-col justify-between">
                    <div className="line-clamp-3">
                        <h1 className="font-medium text-slate-700 focus:text-primary dark:text-navy-100 hover:border-primary dark:focus:text-accent-light text-3xl">
                            {data.name}
                        </h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="avatar h-7 w-7">
                                <img
                                    className="rounded-full"
                                    src="/assets/images/avatar/avatar-20.jpg"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-medium line-clamp-1">
                                    John D.
                                </p>
                                <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                    2 min read
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                </svg>
                            </button>
                            <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
