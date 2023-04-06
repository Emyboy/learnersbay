import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className="dark-">
			<Head />
			<body className="has-min-sidebar is-header-blur is-sidebar-open">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
