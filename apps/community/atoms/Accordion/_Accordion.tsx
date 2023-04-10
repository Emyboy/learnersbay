import {Box} from '@chakra-ui/react';
import React, {useState} from 'react';

type Props = {children: any; title: string; defaultOpen?: boolean;};

export default function _Accordion({children,title, defaultOpen}: Props) {
    const [show, setShow] = useState<boolean>(defaultOpen || true);
    return (
        <div>
            <Box
                mb="2"
                borderBottomWidth={'thin'}
                borderColor="#2a3956"
                className="mt-4 flex items-center justify-between px-4 pb-2"
                cursor={'pointer'}
                onClick={() => setShow(!show)}>
                <span className="text-xs font-medium uppercase">{title}</span>
                <div className="-mr-1.5 flex">
                    {!show ? (
                        <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    ) : (
                        <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5 rotate-180"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    )}
                </div>
            </Box>

            <div
                x-show="expanded"
                x-collapse=""
                style={
                    show
                        ? {height: 'auto'}
                        : {height: '0px', overflow: 'hidden', display: 'none'}
                }>
                {children}
                {/* <ul className="mt-1 space-y-1 px-2 font-inter text-xs+ font-medium">
                    <li>
                        <div
                            tabIndex={0}
                            className="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                            <button className="btn mr-1 h-5 w-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4.5 w-4.5 transition-transform rotate-90"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-3 h-6 w-6 text-warning"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                            </svg>
                            <span>Design</span>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}
