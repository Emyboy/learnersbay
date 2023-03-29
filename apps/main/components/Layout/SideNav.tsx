import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '../../interface'
import { Box } from '@chakra-ui/react'
import { useWindowSize } from 'react-use'

type Props = {}

export default function SideNav({}: Props) {
	const { show_side_nav } = useSelector((state: AppStore) => state.view)
	const { width } = useWindowSize()
	const dispatch = useDispatch()

	useEffect(() => {
		if (width > 700) {
			dispatch({
				type: 'TOGGLE_SIDE_NAV',
				payload: {
					show_side_nav: true,
				},
			})
			console.log('IT IS')
			return
		}

		console.log('ITS NOT')
		dispatch({
			type: 'TOGGLE_SIDE_NAV',
			payload: {
				show_side_nav: false,
			},
		})
	}, [])

	if (!show_side_nav) {
		return null
	} else
		return (
			<Box
				as="aside"
				position={['fixed', 'inherit']}
				className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30 sm:mt-0 h-100"
				top="0px"
				bottom="0px"
				left="0px"
				zIndex={'base'}
			>
				<div className="sidebar -base-sidebar">
					<div className="sidebar__inner">
						<div>
							<div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
								General
							</div>
							<div>
								<div className="sidebar__item -is-active">
									<a
										href="about-1.html"
										className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
									>
										<i className="text-20 icon-discovery mr-15"></i>
										Explore
									</a>
								</div>

								<div className="sidebar__item ">
									<a
										href="courses-list-1.html"
										className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
									>
										<i className="text-20 icon-play-button mr-15"></i>
										Courses
									</a>
								</div>

								<div className="sidebar__item ">
									<a
										href="#"
										className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
									>
										<i className="text-20 icon-book mr-15"></i>
										Books
									</a>
								</div>

								<div className="sidebar__item ">
									<a
										href="blog-list-1.html"
										className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
									>
										<i className="text-20 icon-list mr-15"></i>
										Articles
									</a>
								</div>

								<div className="sidebar__item ">
									<a
										href="#"
										className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
									>
										<i className="text-20 icon-time-management mr-15"></i>
										Calendar
									</a>
								</div>
							</div>
						</div>

						<div className="mt-60">
							<div className="text-16 lh-1 fw-500 text-dark-1 mb-30">Pages</div>
							<Box pb="20vh">
								<div className="">
									<div className="accordion js-accordion">
										<div className="accordion__item">
											<div className="accordion__button py-10 px-20 bg-light-4 rounded-16">
												<span className="text-16 fw-500 text-dark-1">
													About
												</span>
												<div className="accordion__icon">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
														className="feather feather-chevron-down icon size-20 mt-5"
													>
														<polyline points="6 9 12 15 18 9"></polyline>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
														className="feather feather-chevron-up icon size-20"
													>
														<polyline points="18 15 12 9 6 15"></polyline>
													</svg>
												</div>
											</div>
											<div className="accordion__content">
												<div className="accordion__content__inner px-30 pt-15 pb-10">
													<div className="sidebar__links y-gap-5">
														<div>
															<a href="#">About v1</a>
														</div>
														<div>
															<a href="#">About v2</a>
														</div>
														<div>
															<a href="#">About v3</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Contact
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Pricing
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Help
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Faq
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Term
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Privacy
									</a>
								</div>

								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Setting
									</a>
								</div>
								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Setting
									</a>
								</div>
								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Setting
									</a>
								</div>
								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Setting
									</a>
								</div>
								<div className="">
									<a
										href="#"
										className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
									>
										Setting
									</a>
								</div>
							</Box>
						</div>
					</div>
				</div>
			</Box>
		)
}
