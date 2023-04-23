import { Box, Button, Center, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CommunityData } from '../../interface/community.interface';
import { RxPlusCircled } from 'react-icons/rx';
import { getCommunityMembership } from '../../utils/Community.utils';
import _Avatar from '../../atoms/_Avatar';
import moment from 'moment';
import _MembershipStatusBadge from '../../atoms/_MembershipStatusBadge';
import CreateCommunityPopup from '../Popups/CreateCommunityPopup';

type Props = {
    list: CommunityData[];
    onClick: (data: CommunityData) => void;
    selectedCommunity: CommunityData[];
};

export default function ChannelSelector({
    list,
    selectedCommunity,
    onClick,
}: Props) {

    const [addNewCommunity, setAddNewCommunity] = useState(false);

    return (
        <>
            <CreateCommunityPopup isOpen={addNewCommunity} onClose={() => setAddNewCommunity(false)} />
            <Box w={['95vw', '80vw', '65vw', '40vw']}>
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
                            {
                                "Select the communities you'd like to enter or create a new one."
                            }
                        </p>
                    </div>
                </Box>
                <Center>
                    <Button
                        w={['100%', '70%']}
                        mb="8"
                        py="6"
                        px="4"
                        className="card flex-row justify-between space-x-2  ">
                        <div className="flex flex-1 flex-row justify-between align-items-center">
                            <h1
                                style={{ lineHeight: 'revert' }}
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
                    return (
                        <EachCommunity
                            key={item.uuid}
                            data={item}
                            onClick={onClick}
                            isSelected={
                                selectedCommunity.filter(
                                    x => x.uuid === item.uuid,
                                ).length > 0
                            }
                        />
                    );
                })}
            </Box>
        </>
    );
}

const EachCommunity = ({
    data,
    onClick,
    isSelected,
}: {
    data: CommunityData;
    onClick: (data: CommunityData) => void;
    isSelected: boolean;
}) => {
    const communityMembership = getCommunityMembership(data.uuid);

    return (
        <Box
            onClick={() => onClick(data)}
            borderWidth={isSelected ? '1px' : '0px'}
            borderColor={'theme'}
            cursor={'pointer'}
            mb="5"
            className="card flex-row justify-between space-x-2 p-2.5 ">
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
                            {/* <img
                                className="rounded-full"
                                src="/assets/images/avatar/avatar-20.jpg"
                                alt="avatar"
                            /> */}
                            <_Avatar
                                membership={communityMembership}
                                size={'sm'}
                            />
                        </div>
                        <Box pl="2">
                            <p className="text-xs font-medium line-clamp-1">
                                {communityMembership.full_name}
                            </p>
                            <p className="text-tiny+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                {moment(
                                    communityMembership.last_seen,
                                ).fromNow()}
                            </p>
                        </Box>
                    </div>
                    <div className="flex">
                        <_MembershipStatusBadge
                            membership={communityMembership}
                        />
                    </div>
                </div>
            </div>
        </Box>
    );
};
