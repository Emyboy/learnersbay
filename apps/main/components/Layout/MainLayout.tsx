import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function MainLayout(props: any) {
	return (
		<main className="main-content  ">
			<NavBar />
			<div className="content-wrapper pt-60  js-content-wrapper">
				{props.children}
			</div>
			<Footer />
		</main>
	)
}
