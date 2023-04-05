'use client';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store/store';
import {ChakraProvider} from '@chakra-ui/react';
import {CacheProvider} from '@chakra-ui/next-js';
import MasterPopup from '../components/Popups/MasterPopup';
import { getAuthDependencies } from '../redux/actions/auth.actions';

getAuthDependencies();
export default function Providers({children}: any) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <Provider store={store}>
                    <MasterPopup />
                    {children}
                </Provider>
            </ChakraProvider>
        </CacheProvider>
    );
}
