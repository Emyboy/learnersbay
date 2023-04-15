import React, {useState, useEffect} from 'react';
import ChatApp from '../../../../apps/Chat/ChatApp';
import * as cookie from 'cookie';
import {useRouter} from 'next/router';
import Globals from '../../../../Globals';

export default function ChannelUUID({
    communityDependency,
    channelDependency,
}: any) {
    const router = useRouter();

    if (!channelDependency || !channelDependency) {
        router.push('/');
        return null;
    }

    return (
        <>
            <ChatApp
                communityDependency={communityDependency}
                unread_messages={channelDependency.messages}
                channelDependency={channelDependency}
            />
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    try {
        const {community_uuid, channel_uuid} = ctx.params;
        const parsedCookies = cookie.parse(ctx.req.headers.cookie);
        const communityDependencyRequests = await fetch(
            Globals.API_URL +
                `/api/community/dependencies/${community_uuid}`,
            {
                headers: {
                    authorization: 'Bearer ' + parsedCookies?.auth_token,
                },
                cache: 'no-store',
            },
        );

        const communityDependency = await communityDependencyRequests.json();

        const channelDependencyRequest = await fetch(
            Globals.API_URL +
                `/api/channel/dependencies/${channel_uuid}`,
            {
                headers: {
                    authorization: 'Bearer ' + parsedCookies?.auth_token,
                },
                cache: 'no-store',
            },
        );

        const channelDependency = await channelDependencyRequest.json();

        // Pass data to the page via props
        return {props: {communityDependency, channelDependency}};
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
}
