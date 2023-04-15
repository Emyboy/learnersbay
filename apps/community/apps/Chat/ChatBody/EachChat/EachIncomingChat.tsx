import {Box, VStack} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {MessageData} from '../../../../interface/message.interface';
import { ChatWrapper } from './ChatWrapper';

type Props = {
    messages: MessageData[];
};

export default function EachIncomingChat({messages}: Props) {

    return (
        <Box mb='10' className="flex items-start space-x-2.5 sm:space-x-5">
            <div className="avatar">
                <img
                    className="rounded-full"
                    src={messages[0].from.avatar_url}
                    alt="avatar"
                />
            </div>

            <div className="flex flex-col items-start space-y-3.5">
                <VStack className="mr-4 max-w-lg sm:mr-10" alignItems={'flex-start'}>
                    {messages.map(msg => {
                        return (
                            <Box
                                width="fit-content"
                                alignSelf={'flex-start'}
                                m="0"
                                key={msg.createdAt}
                                className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100">
                                <ChatWrapper>
                                    <ReactMarkdown>
                                        {msg.message_text}
                                    </ReactMarkdown>
                                </ChatWrapper>
                            </Box>
                        );
                    })}
                    <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                        {moment(messages[0].createdAt).fromNow()}
                    </p>
                </VStack>
            </div>
        </Box>
    );
}
