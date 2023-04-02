import '../public/assets/css/app.css'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <Provider store={store}> */}
			<CacheProvider>
				<ChakraProvider>
					<div
						id="root"
						className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
					>
						<Component {...pageProps} />
					</div>
				</ChakraProvider>
			</CacheProvider>
			{/* </Provider> */}
		</>
	)
}
