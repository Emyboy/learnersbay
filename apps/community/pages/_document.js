import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
        <Html className="dark">
            <Head />
            <body className="has-min-sidebar is-sidebar-open is-header-blur">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
