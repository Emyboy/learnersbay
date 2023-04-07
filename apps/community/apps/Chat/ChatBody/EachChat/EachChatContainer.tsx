import {useRouter} from 'next/router';
import React from 'react';
import {CommunityMembership} from '../../../../interface/community.interface';
import {getCommunityMembership} from '../../../../redux/actions/community.action';
import dynamic from 'next/dynamic';
import EachChatLoading from './EachChatLoading';
const IncomingChat = dynamic(() => import('./IncomingChat'), {
    loading: () => <EachChatLoading />,
});
const OutGoingChat = dynamic(() => import('./OutGoingChat'), {
    loading: () => <EachChatLoading />,
});
// import IncomingChat from './IncomingChat';
// import OutGoingChat from './OutGoingChat';

type Props = {
    message: any;
};

export default function EachChatContainer({message}: Props) {
    const router = useRouter();
    const {community_uuid} = router.query;
    const authMembership: CommunityMembership = getCommunityMembership(
        String(community_uuid),
    );

    // console.log('THE MEMBERSHIT --', authMembership);
    // console.log(authMembership.id, message.from.id);
    const authOwns = authMembership.id === message?.from?.id;

    return (
        <div>
            {authOwns ? (
                <OutGoingChat message={message} />
            ) : (
                <IncomingChat message={message} />
            )}
        </div>
    );
}
