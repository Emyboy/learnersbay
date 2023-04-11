import { Box, VStack } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import {MessageData} from '../../../../interface/message.interface';
import ReactMarkdown from 'react-markdown';
import { ChatWrapper } from './ChatWrapper';

type Props = {
    messages: MessageData[];
};

export default function EachOutgoingChat({messages}: Props) {
    return (
        <Box mb="10" className="flex items-start justify-end space-x-2.5 sm:space-x-5">
            <div className="flex flex-col items-end space-y-1">
                <VStack className="ml-4 max-w-lg sm:ml-10">
                    {messages.map(msg => {
                        return (
                            <Box
                                width="fit-content"
                                alignSelf={'flex-end'}
                                m="0"
                                key={msg.createdAt}
                                className="rounded-2xl rounded-tr-none p-3 text-slate-700 shadow-sm  dark:text-white dark:bg-navy-500 bg-slate-150">
                                <ChatWrapper>
                                    <ReactMarkdown>
                                        {msg.message_text}
                                    </ReactMarkdown>
                                </ChatWrapper>
                            </Box>
                        );
                    })}
                </VStack>
                <div className="ml-4 max-w-lg sm:ml-10">
                    <p className="mb-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300">
                        {moment(messages[0].createdAt).fromNow()}
                    </p>
                </div>
                <br />
            </div>
            <div className="avatar">
                <img
                    className="rounded-full"
                    src="/assets/images/avatar/avatar-12.jpg"
                    alt="avatar"
                />
            </div>
        </Box>
    );
}
