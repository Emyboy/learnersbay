import {useRouter} from 'next/router';
import React from 'react';
import {MessageData} from '../../../../interface/message.interface';
import {getCommunityMembership} from '../../../../utils/Community.utils';
import EachIncomingChat from '../EachChat/EachIncomingChat';
import EachOutgoingChat from '../EachChat/EachOutgoingChat';

type Props = {
    messages: MessageData[];
};

export default function ChatUserContainer({messages}: Props) {
    const router = useRouter();
    const {community_uuid} = router.query;
    const activeMembership = getCommunityMembership(`${community_uuid}`);
console.log(messages)
    return (
        <>
            {messages.map(val => {
                if (activeMembership.id === val.from.id) {
                    return (
                        <EachOutgoingChat message={val} key={val.createdAt} />
                    );
                } else {
                    return (
                        <EachIncomingChat message={val} key={val.createdAt} />
                    );
                }
            })}
        </>
    );
}
