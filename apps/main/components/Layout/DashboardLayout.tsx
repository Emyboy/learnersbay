import React from 'react'
import FooterNav from './FooterNav'
import NavBar from './NavBar'
import SideNav from './SideNav'

type Props = {
	children: React.ReactElement
}

export default function DashboardLayout({ children }: Props) {
	return (
		<main className="main-content  ">
			<NavBar />
			<div className="dashboard -home-9- px-0 js-dashboard-home-9 ">
				<SideNav />
				<div className="dashboard__main mt-0">
					<div
						className="pt-80 sm:pt-10 dashboard__content pt-0 px-15 pb-0"
						style={{ background: '#F7F8FB', minHeight: '100vh' }}
					>
						{children}
					</div>
				</div>
				<FooterNav />
			</div>
		</main>
	)
}
