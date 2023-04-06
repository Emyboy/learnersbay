import React from 'react';
import ChatApp from '../../../apps/Chat/ChatApp';
import {cookies} from 'next/headers';

export default async function Page(props: any) {
    const cookieStore = cookies();
    const auth_token = cookieStore.get('auth_token');

    const community_id = props.params.community_id;

    const communityDependencyRequests = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/community/dependencies/${community_id}`,
        {
            headers: {
                authorization: 'Bearer ' + auth_token?.value,
            },
            cache: 'no-store'
        },
    );

    const communityDependency = await communityDependencyRequests.json();

    return (
        <>
            <ChatApp
                communityDependency={communityDependency}
                community_id={community_id}
            />
        </>
    );
}
