import Cookies from 'js-cookie';
import React, { useState } from 'react';
import {LoginForm} from 'ui';
import {useSelector} from 'react-redux';
import {AppStore} from '../interface';
// import ChannelSelector from '../components/Selectors/ChannelSelector';
import dynamic from 'next/dynamic';

const ChannelSelector = dynamic(
    () => import('../components/Selectors/ChannelSelector'),
);
import * as cookie from 'cookie';
import {Box, Button, Center, Flex} from '@chakra-ui/react';

export default function index({login}: any) {
    const {community_list} = useSelector((state: AppStore) => state.community);
    const [selectedCommunity, setSelectedCommunity] = useState([])
    const saveAuthToken = (data: any) => {
        Cookies.set('auth_token', data.jwt);
        window.location.reload();
    };

    const logout = () => {
        Cookies.remove('auth_token');
        window.location.reload();
    };

    return (
        <>
            <Box display={'flex'} flexDirection="column" minH={'100vh'}>
                <Box
                    flex={1}
                    h="100%"
                    p="5"
                    overflowY={'scroll'}
                    className="scrollbar-sm overflow-y-scroll">
                    <main className="grid w-full grow grid-cols-1 place-items-center">
                        {login ? (
                            <>
                                <ChannelSelector list={community_list} />
                            </>
                        ) : (
                            <LoginForm onSubmit={saveAuthToken} />
                        )}
                    </main>
                </Box>
                <Flex justifyContent={'flex-end'} p="5">
                    <Button
                        onClick={logout}
                        variant={'ghost'}
                        className="btn font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                        Logout
                    </Button>
                    <button className="btn bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90" disabled={selectedCommunity.length === 0}>
                        Continue
                    </button>
                </Flex>
            </Box>
            {/* <Box maxH={'100vh'} className="d-flex flex-col" id="root">
                <div
                    className="flex grow bg-slate-50 dark:bg-navy-900 flex-1"
                    style={{overflowY: 'scroll'}}>
                    <main className="grid w-full grow grid-cols-1 place-items-center">
                        {login ? (
                            <>
                                <ChannelSelector list={community_list} />
                            </>
                        ) : (
                            <LoginForm onSubmit={saveAuthToken} />
                        )}
                    </main>
                </div>
                <Box
                    position={'absolute'}
                    left={'0'}
                    bottom="0"
                    className="card w-100 p-5  bg-primary"></Box>
            </Box> */}
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    const parsedCookies = cookie.parse(ctx.req.headers.cookie);
    if (parsedCookies?.auth_token) {
        // Pass data to the page via props
        return {props: {login: true}};
    } else {
        return {props: {login: false}};
    }
}
