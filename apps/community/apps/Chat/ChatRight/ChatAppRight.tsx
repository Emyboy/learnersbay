import React from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../../interface';
import ChatAppRightHeader from './ChatAppRightHeader';

type Props = {};

export default function ChatAppRight({}: Props) {
    const {show_right_panel} = useSelector((state: AppStore) => state.view);

    if (!show_right_panel) {
        return null;
    }
    return (
        <>
            <div className="fixed right-0 top-0 z-[101] h-full w-full sm:w-80 shadow">
                <div className="flex h-full w-full flex-col border-l border-slate-150 bg-white transition-transform duration-200 dark:border-navy-600 dark:bg-navy-750">
                    <ChatAppRightHeader />
                </div>
            </div>
        </>
    );
}
