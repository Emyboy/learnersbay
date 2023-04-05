// import '../public/assets/css/app.css'
import '../public/assets/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { useEffect } from 'react'
import MasterPopup from '../components/Popups/MasterPopup'
import { getAuthDependencies } from '../redux/actions/auth.actions'

getAuthDependencies()
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {}, [])

	return (
		<>
			<Provider store={store}>
				<CacheProvider>
					<ChakraProvider>
						<MasterPopup />
						<div
							id="root"
							className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
						>
							<Component {...pageProps} />
						</div>
					</ChakraProvider>
				</CacheProvider>
			</Provider>
		</>
	)
}
