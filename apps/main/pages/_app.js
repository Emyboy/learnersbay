import '../public/assets/css/vendors.css'
import '../public/assets/css/main.css'

import SearchPopup from '../components/Popups/SearchPopup'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<SearchPopup />
			<Component {...pageProps} />
		</>
	)
}
