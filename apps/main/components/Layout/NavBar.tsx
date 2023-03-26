import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
	const navLinks = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Classes',
			link: '/classes',
		},
		{
			name: 'For Tutors',
			link: '/for-tutors',
		},
	]

	const [showNav, setShowNav] = React.useState(false)

	return (
		<header
			data-anim="fade"
			data-add-bg="bg-white"
			className="header -type-4 -shadow bg-white border-bottom-light js-header is-in-view"
		>
			<div className="header__container py-10">
				<div className="row justify-between items-center">
					<div className="col-auto">
						<div className="header-left d-flex items-center">
							<div className="header__logo ">
								<Link data-barba="" href="/" className='d-flex align-items-center'>
									<Image
										width={60}
										height={60}
										src="/assets/logos/logo_purple.png"
										alt="logo"
									/>
								</Link>
							</div>

							<div
								className={`header-menu js-mobile-menu-toggle 	${
									showNav && '-is-el-visible'
								}`}
							>
								<div className="header-menu__content">
									<div className="mobile-bg js-mobile-bg"></div>

									<div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
										<a href="login.html" className="text-dark-1">
											Log in
										</a>
										<a href="signup.html" className="text-dark-1 ml-30">
											Sign Up
										</a>
									</div>

									<div className="menu js-navList">
										<ul className="menu__nav text-dark-1 ml-50 xl:ml-30 -is-active mb-0">
											{navLinks.map((link) => {
												return (
													<li
														className="menu-item-has-children"
														key={link.link}
													>
														<Link href={link.link}>{link.name} </Link>
													</li>
												)
											})}
										</ul>
									</div>

									<div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
										<div className="mobile-footer__number">
											<div className="text-17 fw-500 text-dark-1">Call us</div>
											<div className="text-17 fw-500 text-purple-1">
												800 388 80 90
											</div>
										</div>

										<div className="lh-2 mt-10">
											<div>
												329 Queensberry Street,
												<br /> North Melbourne VIC 3051, Australia.
											</div>
											<div>hi@educrat.com</div>
										</div>

										<div className="mobile-socials mt-10">
											<a
												href="#"
												className="d-flex items-center justify-center rounded-full size-40"
											>
												<i className="fa fa-facebook"></i>
											</a>

											<a
												href="#"
												className="d-flex items-center justify-center rounded-full size-40"
											>
												<i className="fa fa-twitter"></i>
											</a>

											<a
												href="#"
												className="d-flex items-center justify-center rounded-full size-40"
											>
												<i className="fa fa-instagram"></i>
											</a>

											<a
												href="#"
												className="d-flex items-center justify-center rounded-full size-40"
											>
												<i className="fa fa-linkedin"></i>
											</a>
										</div>
									</div>
								</div>

								<div
									onClick={() => setShowNav(false)}
									className="header-menu-close"
									data-el-toggle=".js-mobile-menu-toggle"
								>
									<div className="size-40 d-flex items-center justify-center rounded-full bg-white">
										<div className="icon-close text-dark-1 text-16"></div>
									</div>
								</div>

								<div className="header-menu-bg"></div>
							</div>
						</div>
					</div>

					<div className="col-auto">
						<div className="header-right d-flex items-center">
							<div className="header-right__icons text-white d-flex items-center">
								<div className="">
									<button
										className="d-flex items-center text-dark-1"
										data-el-toggle=".js-search-toggle"
									>
										<i className="text-20 icon icon-search"></i>
									</button>

									<div className="toggle-element js-search-toggle">
										<div className="header-search pt-90 bg-white shadow-4">
											<div className="container">
												<div className="header-search__field">
													<div className="icon icon-search text-dark-1"></div>
													<input
														type="text"
														className="col-12 text-18 lh-12 text-dark-1 fw-500"
														placeholder="What do you want to learn?"
													/>

													<button
														className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
														data-el-toggle=".js-search-toggle"
													>
														<img src="/assets/img/menus/close.svg" alt="icon" />
													</button>
												</div>

												<div className="header-search__content mt-30">
													<div className="text-17 text-dark-1 fw-500">
														Popular Right Now
													</div>

													<div className="d-flex y-gap-5 flex-column mt-20">
														<a
															href="courses-single-1.html"
															className="text-dark-1"
														>
															The Ultimate Drawing Course - Beginner to Advanced
														</a>
														<a
															href="courses-single-2.html"
															className="text-dark-1"
														>
															Character Art School: Complete Character Drawing
															Course
														</a>
														<a
															href="courses-single-3.html"
															className="text-dark-1"
														>
															Complete Blender Creator: Learn 3D Modelling for
															Beginners
														</a>
														<a
															href="courses-single-4.html"
															className="text-dark-1"
														>
															User Experience Design Essentials - Adobe XD UI UX
															Design
														</a>
														<a
															href="courses-single-5.html"
															className="text-dark-1"
														>
															Graphic Design Masterclass - Learn GREAT Design
														</a>
														<a
															href="courses-single-6.html"
															className="text-dark-1"
														>
															Adobe Photoshop CC – Essentials Training Course
														</a>
													</div>

													<div className="mt-30">
														<button className="uppercase underline">
															PRESS ENTER TO SEE ALL SEARCH RESULTS
														</button>
													</div>
												</div>
											</div>
										</div>
										<div
											className="header-search__bg"
											data-el-toggle=".js-search-toggle"
										></div>
									</div>
								</div>

								{/* HERE */}

								<div className="d-none xl:d-block ml-20">
									<button
										onClick={() => setShowNav(!showNav)}
										className="text-dark-1 items-center"
										data-el-toggle=".js-mobile-menu-toggle"
									>
										<i className="text-11 icon icon-mobile-menu"></i>
									</button>
								</div>
							</div>

							<div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
								<Link href={`/login`} className="button -underline text-dark-1">
									Log in
								</Link>
								<Link
									href="/register"
									className="button px-25 h-50 -purple-1 text-white ml-20"
								>
									Join Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
