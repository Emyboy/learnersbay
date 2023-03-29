import {
	Avatar,
	AvatarBadge,
	Box,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Input,
	Flex,
	MenuDivider,
	Icon
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppStore } from '../../interface'
import { RiBellLine } from 'react-icons/ri'

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
	const { user } = useSelector((state: AppStore) => state.auth)
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	if (!show) {
		return null
	} else
		return (
			<div className="header -type-4 -shadow bg-white border-bottom-light js-header is-in-view">
				<Flex
					height={['70px', '80px']}
					alignItems="center"
					justifyContent={'space-between'}
				>
					<HStack mr="8">
						<div className="d-none xl:d-block mr-20">
							<button
								onClick={() => setShowNav(!showNav)}
								className="text-dark-1 items-center"
								data-el-toggle=".js-mobile-menu-toggle"
							>
								<i className="text-11 icon icon-mobile-menu"></i>
							</button>
						</div>
						<Link data-barba="" href="/" className="d-flex align-items-center">
							<HStack>
								<h4 className="d-flex">
									Learners
									<strong className="text-purple-1 d-flex">
										<Image
											width={30}
											height={30}
											src="/assets/logos/logo_purple.png"
											alt="logo"
											className="ml-5 mr-3"
										/>
										ay
									</strong>
								</h4>
							</HStack>
						</Link>
					</HStack>

					<Box flex={1} className="lg:d-none">
						<Box>
							<Input placeholder="Search for anything" />
						</Box>
					</Box>
					<Flex alignItems={'center'}>
						<div
							className={`header-menu js-mobile-menu-toggle 	${
								showNav && '-is-el-visible'
							}`}
						>
							<div className="header-menu__content">
								<div className="mobile-bg js-mobile-bg"></div>

								{!user && (
									<div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
										<Link href="/login" className="text-dark-1 text-dark-1">
											Log in
										</Link>
										<Link href="/register" className="text-dark-1 ml-30">
											Sign Up
										</Link>
									</div>
								)}

								<div className="menu js-navList">
									<ul className="menu__nav text-dark-1 ml-50 xl:ml-30 sm:ml-0 -is-active mb-0">
										{navLinks.map((link) => {
											return (
												<li className="menu-item-has-children" key={link.link}>
													<Link href={link.link} className="fw-600 sm:pl-0">
														{link.name}{' '}
													</Link>
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
						<div className="d-none xl:d-block mr-10">
							<button
								onClick={() => setShowNav(!showNav)}
								className="text-dark-1 items-center"
								data-el-toggle=".js-mobile-menu-toggle"
							>
								<i className="text-11 icon icon-search text-20"></i>
							</button>
						</div>
						{user ? (
							<Box
								className="header-right__buttons d-flex items-center ml-30 xl:ml-20 "
								right={'-91px'}
							>
								<Menu>
									<MenuButton as={Box}>
										<Avatar
											className="bg-purple-1 text-white"
											name={user.first_name + ' ' + user.last_name}
											src={user?.avatar_url}
											size={['sm', 'md']}
										>
											<AvatarBadge
												borderColor="papayawhip"
												bg="tomato"
												boxSize="1.25em"
											/>
										</Avatar>
									</MenuButton>
									<MenuList
										className="header-cart- bg-white -dark-bg-dark-1 rounded-8"
										minW="250px"
									>
										<MenuItem
											className="text-dark-1 text-dark-1 fw-600 py-8"
											icon={<Icon as={RiBellLine} />}
											command="3"
										>
											Notifications
										</MenuItem>
										<MenuItem className="text-dark-1 text-dark-1 fw-600 py-8">
											Your Profile
										</MenuItem>
										<MenuItem className="text-dark-1 text-dark-1 fw-600 py-8">
											My Classes
										</MenuItem>
										<MenuItem className="text-dark-1 text-dark-1 fw-600 py-8">
											Settings
										</MenuItem>
										<MenuDivider color="gray.100" />
										<MenuItem className="text-dark-1 text-dark-1 fw-600 py-8">
											Logout
										</MenuItem>
									</MenuList>
								</Menu>
							</Box>
						) : (
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
						)}
					</Flex>
				</Flex>
			</div>
			// <header
			// 	data-anim="fade"
			// 	data-add-bg="bg-white"

			// >
			// 	<div className="header__container py-10">
			// 		<Flex
			// 			height={['40px', '60px']}
			// 			className="row justify-between items-center"
			// 		>
			// 					<div className="d-none xl:d-block mr-20">
			// 						<button
			// 							onClick={() => setShowNav(!showNav)}
			// 							className="text-dark-1 items-center"
			// 							data-el-toggle=".js-mobile-menu-toggle"
			// 						>
			// 							<i className="text-11 icon icon-mobile-menu"></i>
			// 						</button>
			// 					</div>
			// 					<div className="header__logo ">

			// 					</div>

			// 					<div
			// 						className={`header-menu js-mobile-menu-toggle 	${
			// 							showNav && '-is-el-visible'
			// 						}`}
			// 					>
			// 						<div className="header-menu__content">
			// 							<div className="mobile-bg js-mobile-bg"></div>

			// 							<div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
			// 								<a href="login.html" className="text-dark-1 text-dark-1">
			// 									Log in
			// 								</a>
			// 								<a href="signup.html" className="text-dark-1 ml-30">
			// 									Sign Up
			// 								</a>
			// 							</div>

			// 							{/* <div className="menu js-navList">
			// 								<ul className="menu__nav text-dark-1 ml-50 xl:ml-30 -is-active mb-0">
			// 									{navLinks.map((link) => {
			// 										return (
			// 											<li
			// 												className="menu-item-has-children"
			// 												key={link.link}
			// 											>
			// 												<Link href={link.link}>{link.name} </Link>
			// 											</li>
			// 										)
			// 									})}
			// 								</ul>
			// 							</div> */}

			// 							<div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
			// 								<div className="mobile-footer__number">
			// 									<div className="text-17 fw-500 text-dark-1">Call us</div>
			// 									<div className="text-17 fw-500 text-purple-1">
			// 										800 388 80 90
			// 									</div>
			// 								</div>

			// 								<div className="lh-2 mt-10">
			// 									<div>
			// 										329 Queensberry Street,
			// 										<br /> North Melbourne VIC 3051, Australia.
			// 									</div>
			// 									<div>hi@educrat.com</div>
			// 								</div>

			// 								<div className="mobile-socials mt-10">
			// 									<a
			// 										href="#"
			// 										className="d-flex items-center justify-center rounded-full size-40"
			// 									>
			// 										<i className="fa fa-facebook"></i>
			// 									</a>

			// 									<a
			// 										href="#"
			// 										className="d-flex items-center justify-center rounded-full size-40"
			// 									>
			// 										<i className="fa fa-twitter"></i>
			// 									</a>

			// 									<a
			// 										href="#"
			// 										className="d-flex items-center justify-center rounded-full size-40"
			// 									>
			// 										<i className="fa fa-instagram"></i>
			// 									</a>

			// 									<a
			// 										href="#"
			// 										className="d-flex items-center justify-center rounded-full size-40"
			// 									>
			// 										<i className="fa fa-linkedin"></i>
			// 									</a>
			// 								</div>
			// 							</div>
			// 						</div>

			// 						<div
			// 							onClick={() => setShowNav(false)}
			// 							className="header-menu-close"
			// 							data-el-toggle=".js-mobile-menu-toggle"
			// 						>
			// 							<div className="size-40 d-flex items-center justify-center rounded-full bg-white">
			// 								<div className="icon-close text-dark-1 text-16"></div>
			// 							</div>
			// 						</div>

			// 						<div className="header-menu-bg"></div>
			// 					</div>

			// 			<Box >
			// 				<Box>
			// 					<Input />
			// 				</Box>
			// 			</Box>

			// 			<div >
			// 				<div className="header-right d-flex items-center">
			// 					<div className="header-right__icons text-white d-flex items-center">
			// 						<div className="">
			// 							<HStack gap={5}>
			// 								<button
			// 									className="d-flex items-center text-dark-1"
			// 									data-el-toggle=".js-search-toggle"
			// 								>
			// 									<i className="text-20 icon icon-search"></i>
			// 								</button>
			// 							</HStack>

			// 							<div className="toggle-element js-search-toggle -is-el-visible-">
			// 								<div className="header-search pt-90 bg-white shadow-4 ">
			// 									<div className="container">
			// 										<div className="header-search__field">
			// 											<div className="icon icon-search text-dark-1"></div>
			// 											<input
			// 												type="text"
			// 												className="col-12 text-18 lh-12 text-dark-1 fw-500"
			// 												placeholder="What do you want to learn?"
			// 											/>

			// 											<button
			// 												className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
			// 												data-el-toggle=".js-search-toggle"
			// 											>
			// 												<img src="/assets/img/menus/close.svg" alt="icon" />
			// 											</button>
			// 										</div>

			// 										<div className="header-search__content mt-30">
			// 											<div className="text-17 text-dark-1 fw-500">
			// 												Popular Right Now
			// 											</div>

			// 											<div className="d-flex y-gap-5 flex-column mt-20">
			// 												<a
			// 													href="courses-single-1.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													The Ultimate Drawing Course - Beginner to Advanced
			// 												</a>
			// 												<a
			// 													href="courses-single-2.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													Character Art School: Complete Character Drawing
			// 													Course
			// 												</a>
			// 												<a
			// 													href="courses-single-3.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													Complete Blender Creator: Learn 3D Modelling for
			// 													Beginners
			// 												</a>
			// 												<a
			// 													href="courses-single-4.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													User Experience Design Essentials - Adobe XD UI UX
			// 													Design
			// 												</a>
			// 												<a
			// 													href="courses-single-5.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													Graphic Design Masterclass - Learn GREAT Design
			// 												</a>
			// 												<a
			// 													href="courses-single-6.html"
			// 													className="text-dark-1 text-dark-1"
			// 												>
			// 													Adobe Photoshop CC – Essentials Training Course
			// 												</a>
			// 											</div>

			// 											<div className="mt-30">
			// 												<button className="uppercase underline">
			// 													PRESS ENTER TO SEE ALL SEARCH RESULTS
			// 												</button>
			// 											</div>
			// 										</div>
			// 									</div>
			// 								</div>
			// 								<div
			// 									className="header-search__bg"
			// 									data-el-toggle=".js-search-toggle"
			// 								></div>
			// 							</div>
			// 						</div>

			// 					</div>
			// 				</div>
			// 			</div>
			// 		</Flex>
			// 	</div>
			// </header>
		)
}
