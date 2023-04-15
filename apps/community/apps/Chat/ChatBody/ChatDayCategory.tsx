import {Box} from '@chakra-ui/react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';

type Props = {
    date: string;
};

export default function ChatDayCategory({date}: Props) {
    const [name, setName] = useState('');

    useEffect(() => {
        var dayDate = new Date().toJSON().split('T')[0];
        var dt = moment(date, 'YYYY-MM-DD HH:mm:ss');
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const ytd = yesterday.toJSON().split('T')[0];
        if (dayDate === date) {
            setName('Today');
        }else if(ytd === date){
            setName('Yesterday');
        }else {
            setName(dt.format('dddd'));
        }

    }, [date]);

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
