import React from 'react';
import {MessageData} from '../../../../interface/message.interface';
import ChatUserContainer from './ChatUserContainer';

type Props = {
    time: string;
    timeMessage: MessageData[];
};

export default function ChatTimeContainer({time, timeMessage}: Props) {
    // console.log({time, timeMessage});

    return (
        <>
            <ChatUserContainer messages={timeMessage} />
        </>
    );
}
