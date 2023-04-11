import React, {useEffect, useState} from 'react';
import {MessageData} from '../../../../interface/message.interface';
import ChatDayCategory from '../ChatDayCategory';
import ChatTimeContainer from './ChatTimeContainer';

type Props = {
    dayName: string;
    dayMessages: MessageData[];
};

export default function ChatDayContainer({dayName, dayMessages}: Props) {
    // console.log(dayMessages, dayName)

    const [formattedMessageList, setFormattedMessageList] = useState(null);

    const formatMessage = () => {
        let output: any = {};
        dayMessages.forEach(msg => {
            let timeSplit = msg.createdAt.split('T')[1].split(':');
            let timeCategory = timeSplit[0] + ':' + timeSplit[1];
            output = {...output, [timeCategory]: []};
        });
        dayMessages.forEach(msg => {
            let timeSplit = msg.createdAt.split('T')[1].split(':');
            let timeCategory = timeSplit[0] + ':' + timeSplit[1];
            if(msg.createdAt.includes(timeCategory)){
                output[timeCategory].push(msg);
            }
        });
        // console.log(message_list);
        // console.log('OUT PUT --',{output, dayName});
        setFormattedMessageList(output);
    };

    useEffect(() => {
        formatMessage();
    }, []);
    // console.log(formattedMessageList);

    return (
        <>
            <ChatDayCategory name={dayName} />
            {formattedMessageList &&
                Object.keys(formattedMessageList).map(time => {
                    return (
                        <ChatTimeContainer
                            time={time}
                            timeMessage={formattedMessageList[time]}
                        />
                    );
                })}
        </>
    );
}
