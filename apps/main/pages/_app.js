import '../public/assets/css/vendors.css'
import '../public/assets/css/main.css'

import { Provider } from 'react-redux'
import SearchPopup from '../components/Popups/SearchPopup'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import store from '../redux/store/store'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<CacheProvider>
					<ChakraProvider>
						<SearchPopup />
						<Component {...pageProps} />
					</ChakraProvider>
				</CacheProvider>
			</Provider>
		</>
	)
}
