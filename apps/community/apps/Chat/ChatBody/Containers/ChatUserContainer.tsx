import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {MessageData} from '../../../../interface/message.interface';
import {getCommunityMembership} from '../../../../utils/Community.utils';
import EachIncomingChat from '../EachChat/EachIncomingChat';
import EachOutgoingChat from '../EachChat/EachOutgoingChat';

type Props = {
    messages: MessageData[];
};

export default function ChatUserContainer({messages}: Props) {
    const router = useRouter();
    const {community_uuid} = router.query;
    const activeMembership = getCommunityMembership(`${community_uuid}`);

    const [formattedMessageList, setFormattedMessageList] = useState(null);

    // console.log(messages);
    const formatMessage = (_messages: any[]) => {
        let output: any = {};

        _messages.forEach(msg => {
            let timeSplit = msg.createdAt.split('T')[1].split(':');
            let timeCategory = timeSplit[0] + ':' + timeSplit[1];
            const userKey = timeCategory + '-' + msg.from.id;
            output = {...output, [userKey]: []};
        });

        _messages.forEach(msg => {
            let timeSplit = msg.createdAt.split('T')[1].split(':');
            let timeCategory = timeSplit[0] + ':' + timeSplit[1];
            const userKey = timeCategory + '-' + msg.from.id;
            output[userKey].push(msg);
        });

        // console.log(message_list);
        // console.log('OUT PUT --', output);
        setFormattedMessageList(output);
    };

    useEffect(() => {
        formatMessage(messages);
    }, [messages]);

    // console.log({
    //     userKey: formattedMessageList,
    //     activeMembership,
    // });

    return (
        <>
            {formattedMessageList &&
                Object.keys(formattedMessageList).map(userKey => {
                    // return (
                    //     <EachOutgoingChat
                    //         messages={formattedMessageList[userKey]}
                    //         key={userKey}
                    //     />
                    // );
                if (activeMembership.id === parseInt(userKey.split('-')[1])) {
                    return (
                        <EachOutgoingChat
                            messages={formattedMessageList[userKey]}
                            key={userKey}
                        />
                    );
                } else {
                    return (
                        <EachIncomingChat
                            messages={formattedMessageList[userKey]}
                            key={userKey}
                        />
                    );
                }
                })}
            {messages.map(val => {
            })}
        </>
    );
}
