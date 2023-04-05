import React from 'react';
import ChatApp from '../../../apps/Chat/ChatApp';

export default function Page(props: any) {
    console.log('hi', props);
    return (
        <>
            <ChatApp community_id={props.params.community_id} />
        </>
    );
}
