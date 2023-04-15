import '../public/assets/css/app.css';
import '../public/assets/styles.css';
import {ChakraProvider} from '@chakra-ui/react';
import {CacheProvider} from '@chakra-ui/next-js';
import {Provider} from 'react-redux';
import store from '../redux/store/store';
import {useEffect} from 'react';
import MasterPopup from '../components/Popups/MasterPopup';
import {getAuthDependencies} from '../redux/actions/auth.actions';
import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        theme: '#5f5af6',
    },
});

getAuthDependencies();
export default function MyApp({Component, pageProps}) {
    useEffect(() => {}, []);

    return (
        <>
            <Provider store={store}>
                <CacheProvider>
                    <ChakraProvider theme={theme}>
                        <MasterPopup />
                        <Component {...pageProps} />
                    </ChakraProvider>
                </CacheProvider>
            </Provider>
        </>
    );
}
