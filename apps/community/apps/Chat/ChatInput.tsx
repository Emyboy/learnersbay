import React, {useCallback, useEffect, useState} from 'react';
import {API} from '../../utils/API.utils';
import {useSelector} from 'react-redux';
import {AppStore} from '../../interface';
import {Box, useToast} from '@chakra-ui/react';
import {getCommunityMembership} from '../../utils/Community.utils';
import {useRouter} from 'next/router';
import {PendingMessageData} from '../../interface/message.interface';

import {sendMessage} from '../../redux/actions/chat.action';

type Props = {
    channelDependency: any;
};

// document.addEventListener('keydown', function (event) {
//     if (event.ctrlKey && event.key === 'Enter') {
//         console.log('SENDING');
//     }
// });

export default function ChatInput({channelDependency}: Props) {
    const [message_text, setMessageText] = useState('');
    const [inputHeight, setInputHeight] = useState('70px');
    const router = useRouter();
    const {community_uuid, channel_uuid} = router.query;
    const {channel_messages} = useSelector((state: AppStore) => state.chat);
    const communityMembership = getCommunityMembership(`${community_uuid}`);
    // console.log('INPUT MEMBERSHIP --', communityMembership);
    const [inFocus, setInFocus] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (message_text && message_text.length > 289) {
            setInputHeight('200px');
        } else {
            setInputHeight('70px');
        }
    }, [message_text]);


    const handleSubmit = useCallback(() => {
        setMessageText(state => {
            if (community_uuid && channel_uuid && state) {
                sendMessage(state, `${community_uuid}`);
                setTimeout(() => {
                    const chatEnd = document.querySelector('#chat-end');
                    if (chatEnd) {
                        chatEnd.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }, 300);
                return '';
            };
            return state;
        });
    }, [communityMembership, message_text, channelDependency, community_uuid]);

    useEffect(() => {
        const chatInput = document.querySelector('#chat-input');
        chatInput?.addEventListener('keydown', (event: any) => {
            if (event?.ctrlKey && event?.key === 'Enter') {
                handleSubmit();
            }
        });
    }, []);

    return (
        <Box
            className={`chat-footer relative flex  w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800`}
            height={inputHeight}>
            <div className="-ml-1.5 flex flex-1 space-x-2 h-full py-2">
                <button className="btn h-9 w-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5.5 w-5.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                </button>

                <textarea
                    id="chat-input"
                    className="form-input w-full is-scrollbar-hidden bg-transparent placeholder:text-slate-400/70 p-2"
                    placeholder="Start typing..."
                    value={message_text}
                    autoFocus
                    // rows={1}
                    style={{
                        resize: 'none',
                        // height: '100%',
                    }}
                    onChange={e => setMessageText(e.target.value)}
                />
            </div>

            <div className="-mr-1.5 flex">
                <button className="btn h-9 w-9 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5.5 w-5.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </button>
                <button
                    className="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                    onClick={handleSubmit}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5.5 w-5.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1.5">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341"></path>
                    </svg>
                </button>
            </div>
        </Box>
    );
}
