import { Box } from '@chakra-ui/react';
import React from 'react';

export default function EachChatLoading() {
    return (
        <div className="rounded-2xl rounded-tl-none p-3 text-slate-700 shadow-sm dark:text-navy-100 " style={{ width: '50%'}}>
            <div className="flex space-x-5 py-4">
                <div className="skeleton animate-wave h-10 w-10 rounded-full bg-slate-150 dark:bg-navy-500"></div>
                <div className="flex flex-1 flex-col justify-between py-2">
                    <Box mb='6' className="skeleton animate-wave h-3 w-10/12 rounded bg-slate-150 dark:bg-navy-500 "></Box>
                    <div className="skeleton animate-wave h-6 w-full rounded bg-slate-150 dark:bg-navy-500"></div>
                </div>
            </div>
        </div>
    );
}
