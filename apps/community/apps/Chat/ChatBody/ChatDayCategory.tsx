import {Box} from '@chakra-ui/react';
import React from 'react';

type Props = {
    name: string;
};

export default function ChatDayCategory({name}: Props) {
    return (
        <>
            <Box
                className="mx-4 flex items-center space-x-3"
                mt="70px"
                mb="40px">
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                <p>{name}</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </Box>
        </>
    );
}
