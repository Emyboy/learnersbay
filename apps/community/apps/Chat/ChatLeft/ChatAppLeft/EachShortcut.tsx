import Link from 'next/link';
import React from 'react'
import { Icon, Text } from '@chakra-ui/react'

type Props = {
    name: string;
    url: string;
    icon:any
}

export default ({ icon,name,url}:Props) => {
    return (
        <li>
            <Link
                className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                href={url}>
                <Icon
                    as={icon}
                    className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                />
               
                <Text fontWeight={'thin'} className="text-slate-800 dark:text-navy-100">
                    {name}
                </Text>
            </Link>
        </li>
    );
};
