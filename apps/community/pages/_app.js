import '../assets/css/app.css'
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
						<main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80">
							<Component {...pageProps} />
						</main>
					</div>
				</ChakraProvider>
			</CacheProvider>
			{/* </Provider> */}
		</>
	)
}
