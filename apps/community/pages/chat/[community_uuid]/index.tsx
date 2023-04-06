import React from 'react';
import ChatApp from '../../../apps/Chat/ChatApp';
import * as cookie from 'cookie';

export default function index({communityDependency}: any) {
    return (
        <>
            <ChatApp communityDependency={communityDependency} />
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    const {community_uuid} = ctx.params;
    const parsedCookies = cookie.parse(ctx.req.headers.cookie);
    const communityDependencyRequests = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/community/dependencies/${community_uuid}`,
        {
            headers: {
                authorization: 'Bearer ' + parsedCookies?.auth_token,
            },
            cache: 'no-store',
        },
    );

    const communityDependency = await communityDependencyRequests.json();

    // Pass data to the page via props
    return {props: {communityDependency}};
}
