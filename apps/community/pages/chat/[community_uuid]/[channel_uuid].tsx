import React, {useState, useEffect} from 'react';
import ChatApp from '../../../apps/Chat/ChatApp';
import * as cookie from 'cookie';

export default function ChannelUUID({
    communityDependency,
    unreadMessages,
}: any) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(unreadMessages)
        console.log(unreadMessages)
    }, [unreadMessages]);

    return (
        <>
            <ChatApp
                communityDependency={communityDependency}
                unread_messages={messages}
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

    const unreadMessagesRequest = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
            `/channel/messages/unread/${channel_uuid}`,
        {
            headers: {
                authorization: 'Bearer ' + parsedCookies?.auth_token,
            },
            cache: 'no-store',
        },
    );

    const unreadMessages = await unreadMessagesRequest.json();

    // Pass data to the page via props
    return {props: {communityDependency, unreadMessages}};
}
