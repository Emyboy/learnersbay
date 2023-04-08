import Cookies from 'js-cookie';
import React, {useEffect, useState} from 'react';
import {LoginForm} from 'ui';
import {useSelector} from 'react-redux';
import {AppStore} from '../interface';
// import ChannelSelector from '../components/Selectors/ChannelSelector';
import dynamic from 'next/dynamic';

const ChannelSelector = dynamic(
    () => import('../components/Selectors/ChannelSelector'),
    {ssr: false},
);
import * as cookie from 'cookie';
import {Box, Button, Flex} from '@chakra-ui/react';
import {CommunityData} from '../interface/community.interface';
import {setCommunityState} from '../redux/actions/community.action';
import {useRouter} from 'next/router';
import {logout} from '../redux/actions/auth.actions';

export default function index({login}: any) {
    const {community_list} = useSelector((state: AppStore) => state.community);
    const [selectedCommunity, setSelectedCommunity] = useState<CommunityData[]>(
        [],
    );
    const router = useRouter();
    const saveAuthToken = (data: any) => {
        Cookies.set('auth_token', data.jwt, {expires: 30});
        window.location.reload();
    };

    useEffect(() => {
        const com = localStorage.getItem('communities');
        if(com){
            setSelectedCommunity(
                JSON.parse(com),
            );
        }
    }, []);


    const openChat = () => {
        setCommunityState({
            selectedCommunities: selectedCommunity,
        });
        localStorage.setItem('communities', JSON.stringify(selectedCommunity));
        router.push(`/chat/community/${selectedCommunity[0].uuid}`);
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
                                <ChannelSelector
                                    list={community_list}
                                    selectedCommunity={selectedCommunity}
                                    onClick={e => {
                                        selectedCommunity.includes(e)
                                            ? setSelectedCommunity(
                                                  selectedCommunity.filter(
                                                      x => x.id !== e.id,
                                                  ),
                                              )
                                            : setSelectedCommunity([
                                                  ...selectedCommunity,
                                                  e,
                                              ]);
                                    }}
                                />
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
                    <Button
                        className="btn bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90"
                        isDisabled={selectedCommunity.length === 0}
                        onClick={openChat}>
                        Continue
                    </Button>
                </Flex>
            </Box>
        </>
    );
}

export async function getServerSideProps(ctx: any) {
    try {
        const parsedCookies = cookie.parse(ctx.req.headers.cookie) || null;
        if (parsedCookies?.auth_token) {
            // Pass data to the page via props
            return {props: {login: true}};
        } else {
            return {props: {login: false}};
        }
    } catch (error) {
        return {props: {login: false}};
    }
}
