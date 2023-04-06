import React from 'react';
import ChatApp from '../../../../apps/Chat/ChatApp';
import {cookies} from 'next/headers';
import {CommunityDependencies} from '../../../../interface';

export default async function ChannelDetails(props: any) {
    const cookieStore = cookies();
    const auth_token = cookieStore.get('auth_token');

    const community_id = props.params.community_id;
    const channel_uuid = props.params.channel_id;


    const communityDependencyRequests = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/community/dependencies/${community_id}`,
        {
            headers: {
                authorization: 'Bearer ' + auth_token?.value,
            },
            cache: 'no-store',
        },
    );
    const communityDependency: CommunityDependencies =
        await communityDependencyRequests.json();

    const unreadMessagesRequest = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/channel/messages/unread/${channel_uuid}`,
        {
            headers: {
                authorization: 'Bearer ' + auth_token?.value,
            },
            cache: 'no-store',
        },
    );

    const unreadMessages = await unreadMessagesRequest.json();

    console.log('MESSAGES --', unreadMessages);

    return (
        <>
            <ChatApp
                communityDependency={communityDependency}
                community_id={communityDependency.community.uuid}
                unread_messages={unreadMessages}
            />
        </>
    );
}
