import {Box, Flex, HStack, Spinner, VStack, Icon} from '@chakra-ui/react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
    MessageData,
    PendingMessageData,
} from '../../../../interface/message.interface';
import ReactMarkdown from 'react-markdown';
import {ChatWrapper} from './ChatWrapper';
import {API} from '../../../../utils/API.utils';
import { RxCheck } from 'react-icons/rx'

type Props = {
    messages: MessageData[] & PendingMessageData[];
};

export default function EachOutgoingChat({messages}: Props) {
    return (
        <Box
            mb="10"
            className="flex items-start justify-end space-x-2.5 sm:space-x-5">
            <div className="flex flex-col items-end space-y-1">
                <VStack className="ml-4 max-w-lg sm:ml-10">
                    {messages.map((msg: any) => {
                        return (
                            <PendingMessageBubble
                                message={msg}
                                key={msg?.uuid}
                            />
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

type BobbleProps = {
    message: PendingMessageData & MessageData;
};

export const PendingMessageBubble = ({message}: BobbleProps) => {
    /**
     * - handle message update
     * - handle message deletion
     */
    const [msg, setMsg] = useState<PendingMessageData & MessageData>(message);

    const sendPendingMessage = async (
        data: PendingMessageData & MessageData,
    ) => {
        try {
            const payload = {
                message_text: data.message_text,
                community: data.community.id,
                channel: data.channel.id,
                from: data.from.id,
                uuid: data.uuid,
            };
            // console.log('SENDING --', payload);
            const newMsg = await API(`/messages`, true, {
                method: 'POST',
                data: {data: payload},
            });
            setMsg(newMsg.data);
           
        } catch (error) {
            /**
             * todo 
             * - add retry button if message fails;
             */
            console.log('ERROR --', error);
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        if (msg && msg?.status === 'pending') {
            sendPendingMessage(msg);
        }
    }, [msg]);

    return (
        <Box
            width="fit-content"
            alignSelf={'flex-end'}
            m="0"
            key={msg.uuid}
            className="rounded-2xl rounded-tr-none p-3 text-slate-700 shadow-sm  dark:text-white dark:bg-navy-500 bg-slate-150">
            <ChatWrapper style={{ textAlign: 'end'}}>
                <ReactMarkdown>{msg.message_text}</ReactMarkdown>
            </ChatWrapper>
            <Flex justifyContent={'space-between'}>
                <HStack minW="100px"></HStack>
                {msg?.status === 'pending' && (
                    <Spinner
                        alignSelf={'flex-end'}
                        size="sm"
                        className="spinner is-elastic h-3 w-3 animate-spin text-slate-500 dark:text-navy-300"
                    />
                )}
                {!msg?.status && (
                    <Icon
                        as={RxCheck}
                        alignSelf={'flex-end'}
                        size="sm"
                        className="spinner is-elastic h-3 w-3  text-slate-500 dark:text-navy-300"
                    />
                )}
            </Flex>
        </Box>
    );
};
