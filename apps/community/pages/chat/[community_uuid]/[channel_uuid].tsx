import React, {useState, useEffect} from 'react';
import ChatApp from '../../../apps/Chat/ChatApp';
import * as cookie from 'cookie';

export default function ChannelUUID({
    communityDependency,
    channelDependency,
}: any) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(channelDependency.messages)
        console.log(channelDependency)
    }, [channelDependency]);


    return (
        <>
            <ChatApp
                communityDependency={communityDependency}
                unread_messages={messages}
                channelDependency={channelDependency}
            />
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    const {community_uuid, channel_uuid} = ctx.params;
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

    const channelDependencyRequest = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/channel/dependencies/${channel_uuid}`,
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
}
