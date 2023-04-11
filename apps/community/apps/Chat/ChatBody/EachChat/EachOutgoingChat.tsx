import React from 'react';
import {MessageData} from '../../../../interface/message.interface';

type Props = {
    message: MessageData;
};

export default function EachOutgoingChat({message}: Props) {
    return (
        <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
            <div className="flex flex-col items-end space-y-1">
                <div className="ml-4 max-w-lg sm:ml-10">
                    <div className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white">
                        {message.message_text}
                    </div>
                </div>
                <div className="ml-4 max-w-lg sm:ml-10">
                    <p className="mb-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300">
                        08:16
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
        </div>
    );
}
