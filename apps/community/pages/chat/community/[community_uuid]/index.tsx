import React from 'react';
import ChatApp from '../../../../apps/Chat/ChatApp';
import * as cookie from 'cookie';
import Globals from '../../../../Globals';

export default function index({communityDependency}: any) {
    return (
        <>
            <ChatApp communityDependency={communityDependency} />
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    try {
        const {community_uuid} = ctx.params;
        const parsedCookies = cookie.parse(ctx.req.headers.cookie);
        const communityDependencyRequests = await fetch(
            Globals.API_URL +
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
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
}
