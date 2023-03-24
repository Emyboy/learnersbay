import React from 'react'

export default function NavBar() {
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
								<a data-barba="" href="index.html">
									<img src="/assets/img/general/logo-dark.svg" alt="logo" />
								</a>
							</div>

							<div className="header-menu js-mobile-menu-toggle ">
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
											<li className="menu-item-has-children">
												<a data-barba="">
													Home{' '}
													<i className="icon-chevron-right text-13 ml-10"></i>
												</a>

												<ul className="subnav">
													<li className="menu__backButton js-nav-list-back">
														<a href="#">
															<i className="icon-chevron-left text-13 mr-10"></i>{' '}
															Home
														</a>
													</li>

													<li>
														<a href="index.html">Home 1</a>
													</li>

													<li>
														<a href="home-2.html">Home 2</a>
													</li>

													<li>
														<a href="home-3.html">Home 3</a>
													</li>

													<li>
														<a href="home-4.html">Home 4</a>
													</li>

													<li>
														<a href="home-5.html">Home 5</a>
													</li>

													<li>
														<a href="home-6.html">Home 6</a>
													</li>

													<li>
														<a href="home-7.html">Home 7</a>
													</li>

													<li>
														<a href="home-8.html">Home 8</a>
													</li>

													<li>
														<a href="home-9.html">Home 9</a>
													</li>

													<li>
														<a href="home-10.html">Home 10</a>
													</li>
												</ul>
											</li>

											<li className="menu-item-has-children -has-mega-menu">
												<a data-barba="">
													Courses{' '}
													<i className="icon-chevron-right text-13 ml-10"></i>
												</a>

												<div className="mega xl:d-none">
													<div className="mega__menu">
														<div className="row x-gap-40">
															<div className="col">
																<h4 className="text-17 fw-500 mb-20">
																	Course List Layouts
																</h4>

																<ul className="mega__list">
																	<li>
																		<a data-barba="" href="courses-list-1.html">
																			Course List v1
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-2.html">
																			Course List v2
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-3.html">
																			Course List v3
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-4.html">
																			Course List v4
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-5.html">
																			Course List v5
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-6.html">
																			Course List v6
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-7.html">
																			Course List v7
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-8.html">
																			Course List v8
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="courses-list-9.html">
																			Course List v9
																		</a>
																	</li>
																</ul>
															</div>

															<div className="col">
																<h4 className="text-17 fw-500 mb-20">
																	Course Single Layouts
																</h4>

																<ul className="mega__list">
																	<li>
																		<a
																			data-barba=""
																			href="courses-single-1.html"
																		>
																			Course Single v1
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="courses-single-2.html"
																		>
																			Course Single v2
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="courses-single-3.html"
																		>
																			Course Single v3
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="courses-single-4.html"
																		>
																			Course Single v4
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="courses-single-5.html"
																		>
																			Course Single v5
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="courses-single-6.html"
																		>
																			Course Single v6
																		</a>
																	</li>
																</ul>
															</div>

															<div className="col">
																<h4 className="text-17 fw-500 mb-20">
																	About Courses
																</h4>

																<ul className="mega__list">
																	<li>
																		<a
																			data-barba=""
																			href="lesson-single-1.html"
																		>
																			Lesson Page v1
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="lesson-single-2.html"
																		>
																			Lesson Page v2
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="instructors-list-1.html"
																		>
																			Instructors List v1
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="instructors-list-2.html"
																		>
																			Instructors List v2
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="instructors-single.html"
																		>
																			Instructors Single
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="instructors-become.html"
																		>
																			Become an Instructor
																		</a>
																	</li>
																</ul>
															</div>

															<div className="col">
																<h4 className="text-17 fw-500 mb-20">
																	Dashboard Pages
																</h4>

																<ul className="mega__list">
																	<li>
																		<a data-barba="" href="dashboard.html">
																			Dashboard
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-courses.html">
																			My Courses
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-bookmarks.html">
																			Bookmarks
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-listing.html">
																			Add Listing
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-reviews.html">
																			Reviews
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-settings.html">
																			Settings
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="dshb-administration.html"
																		>
																			Administration
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="dshb-assignment.html"
																		>
																			Assignment
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-calendar.html">
																			Calendar
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-dashboard.html">
																			Single Dashboard
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="dshb-dictionary.html"
																		>
																			Dictionary
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-forums.html">
																			Forums
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-grades.html">
																			Grades
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-messages.html">
																			Messages
																		</a>
																	</li>

																	<li>
																		<a
																			data-barba=""
																			href="dshb-participants.html"
																		>
																			Participants
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-quiz.html">
																			Quiz
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="dshb-survey.html">
																			Survey
																		</a>
																	</li>
																</ul>
															</div>

															<div className="col">
																<h4 className="text-17 fw-500 mb-20">
																	Popular Courses
																</h4>

																<ul className="mega__list">
																	<li>
																		<a data-barba="" href="#">
																			Web Developer
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			Mobile Developer
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			Digital Marketing
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			Development
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			Finance &amp; Accounting
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			Design
																		</a>
																	</li>

																	<li>
																		<a data-barba="" href="#">
																			View All Courses
																		</a>
																	</li>
																</ul>
															</div>
														</div>

														<div className="mega-banner bg-purple-1 ml-40">
															<div className="text-24 lh-15 text-white fw-700">
																Join more than
																<br />
																<span className="text-green-1">
																	8 million learners
																</span>
																worldwide
															</div>
															<a
																href="#"
																className="button -md -green-1 text-dark-1 fw-500 col-12"
															>
																Start Learning For Free
															</a>
														</div>
													</div>
												</div>

												<ul className="subnav d-none xl:d-block">
													<li className="menu__backButton js-nav-list-back">
														<a href="#">
															<i className="icon-chevron-left text-13 mr-10"></i>{' '}
															Courses
														</a>
													</li>

													<li className="menu-item-has-children">
														<a>
															Course List Layouts
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Course List Layouts
																</a>
															</li>

															<li>
																<a href="courses-list-1.html">Course List v1</a>
															</li>

															<li>
																<a href="courses-list-2.html">Course List v2</a>
															</li>

															<li>
																<a href="courses-list-3.html">Course List v3</a>
															</li>

															<li>
																<a href="courses-list-4.html">Course List v4</a>
															</li>

															<li>
																<a href="courses-list-5.html">Course List v5</a>
															</li>

															<li>
																<a href="courses-list-6.html">Course List v6</a>
															</li>

															<li>
																<a href="courses-list-7.html">Course List v7</a>
															</li>

															<li>
																<a href="courses-list-8.html">Course List v8</a>
															</li>

															<li>
																<a href="courses-list-all.html">
																	Course List All
																</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															Course Single Layouts
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Course Single Layouts
																</a>
															</li>

															<li>
																<a href="courses-single-1.html">
																	Course Single v1
																</a>
															</li>

															<li>
																<a href="courses-single-2.html">
																	Course Single v2
																</a>
															</li>

															<li>
																<a href="courses-single-3.html">
																	Course Single v3
																</a>
															</li>

															<li>
																<a href="courses-single-4.html">
																	Course Single v4
																</a>
															</li>

															<li>
																<a href="courses-single-5.html">
																	Course Single v5
																</a>
															</li>

															<li>
																<a href="courses-single-6.html">
																	Course Single v6
																</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															About Courses
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	About Courses
																</a>
															</li>

															<li>
																<a href="lesson-single-1.html">
																	Lesson Page v1
																</a>
															</li>

															<li>
																<a href="lesson-single-2.html">
																	Lesson Page v2
																</a>
															</li>

															<li>
																<a href="instructors-list-1.html">
																	Instructors List v1
																</a>
															</li>

															<li>
																<a href="instructors-list-2.html">
																	Instructors List v2
																</a>
															</li>

															<li>
																<a href="instructors-single.html">
																	Instructors Single
																</a>
															</li>

															<li>
																<a href="instructors-become.html">
																	Become an Instructor
																</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															Dashboard Pages
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Dashboard Pages
																</a>
															</li>

															<li>
																<a href="dashboard.html">Dashboard</a>
															</li>

															<li>
																<a href="dshb-courses.html">My Courses</a>
															</li>

															<li>
																<a href="dshb-bookmarks.html">Bookmarks</a>
															</li>

															<li>
																<a href="dshb-listing.html">Add Listing</a>
															</li>

															<li>
																<a href="dshb-reviews.html">Reviews</a>
															</li>

															<li>
																<a href="dshb-settings.html">Settings</a>
															</li>

															<li>
																<a href="dshb-administration.html">
																	Administration
																</a>
															</li>

															<li>
																<a href="dshb-assignment.html">Assignment</a>
															</li>

															<li>
																<a href="dshb-calendar.html">Calendar</a>
															</li>

															<li>
																<a href="dshb-dashboard.html">
																	Single Dashboard
																</a>
															</li>

															<li>
																<a href="dshb-dictionary.html">Dictionary</a>
															</li>

															<li>
																<a href="dshb-forums.html">Forums</a>
															</li>

															<li>
																<a href="dshb-grades.html">Grades</a>
															</li>

															<li>
																<a href="dshb-messages.html">Messages</a>
															</li>

															<li>
																<a href="dshb-participants.html">
																	Participants
																</a>
															</li>

															<li>
																<a href="dshb-quiz.html">Quiz</a>
															</li>

															<li>
																<a href="dshb-survey.html">Survey</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															Popular Courses
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Popular Courses
																</a>
															</li>

															<li>
																<a href="#">Web Developer</a>
															</li>

															<li>
																<a href="#">Mobile Developer</a>
															</li>

															<li>
																<a href="#">Digital Marketing</a>
															</li>

															<li>
																<a href="#">Development</a>
															</li>

															<li>
																<a href="#">Finance &amp; Accounting</a>
															</li>

															<li>
																<a href="#">Design</a>
															</li>

															<li>
																<a href="#">View All Courses</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li className="menu-item-has-children">
												<a data-barba="">
													Events{' '}
													<i className="icon-chevron-right text-13 ml-10"></i>
												</a>
												<ul className="subnav">
													<li className="menu__backButton js-nav-list-back">
														<a href="#">
															<i className="icon-chevron-left text-13 mr-10"></i>{' '}
															Events
														</a>
													</li>

													<li>
														<a href="event-list-1.html">Event List 1</a>
													</li>

													<li>
														<a href="event-list-2.html">Event List 2</a>
													</li>

													<li>
														<a href="event-single.html">Event Single</a>
													</li>
												</ul>
											</li>

											<li className="menu-item-has-children">
												<a data-barba="">
													Blog{' '}
													<i className="icon-chevron-right text-13 ml-10"></i>
												</a>
												<ul className="subnav">
													<li className="menu__backButton js-nav-list-back">
														<a href="#">
															<i className="icon-chevron-left text-13 mr-10"></i>{' '}
															Blog
														</a>
													</li>

													<li>
														<a href="blog-list-1.html">Blog List 1</a>
													</li>

													<li>
														<a href="blog-list-2.html">Blog List 2</a>
													</li>

													<li>
														<a href="blog-list-3.html">Blog List 3</a>
													</li>

													<li>
														<a href="blog-single.html">Blog Single</a>
													</li>
												</ul>
											</li>

											<li className="menu-item-has-children">
												<a data-barba="">
													Pages{' '}
													<i className="icon-chevron-right text-13 ml-10"></i>
												</a>

												<ul className="subnav">
													<li className="menu__backButton js-nav-list-back">
														<a href="#">
															<i className="icon-chevron-left text-13 mr-10"></i>{' '}
															Pages
														</a>
													</li>
													<li className="menu-item-has-children">
														<a>
															About Us
															<div className="icon-chevron-right text-11"></div>
														</a>

														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	About Us
																</a>
															</li>

															<li>
																<a href="about-1.html">About 1</a>
															</li>

															<li>
																<a href="about-2.html">About 2</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															Contact
															<div className="icon-chevron-right text-11"></div>
														</a>
														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Contact
																</a>
															</li>

															<li>
																<a href="contact-1.html">Contact 1</a>
															</li>

															<li>
																<a href="contact-2.html">Contact 2</a>
															</li>
														</ul>
													</li>

													<li className="menu-item-has-children">
														<a>
															Shop
															<div className="icon-chevron-right text-11"></div>
														</a>
														<ul className="subnav">
															<li className="menu__backButton js-nav-list-back">
																<a href="#">
																	<i className="icon-chevron-left text-13 mr-10"></i>{' '}
																	Shop
																</a>
															</li>

															<li>
																<a href="shop-cart.html">Shop Cart</a>
															</li>

															<li>
																<a href="shop-checkout.html">Shop Checkout</a>
															</li>

															<li>
																<a href="shop-list.html">Shop List</a>
															</li>

															<li>
																<a href="shop-order.html">Shop Order</a>
															</li>

															<li>
																<a href="shop-single.html">Shop Single</a>
															</li>
														</ul>
													</li>

													<li>
														<a href="pricing.html">Membership plans</a>
													</li>

													<li>
														<a href="404.html">404 Page</a>
													</li>

													<li>
														<a href="terms.html">FAQs</a>
													</li>

													<li>
														<a href="help-center.html">Help Center</a>
													</li>

													<li>
														<a href="login.html">Login</a>
													</li>

													<li>
														<a href="signup.html">Register</a>
													</li>

													<li>
														<a href="ui-elements.html">UI Elements</a>
													</li>
												</ul>
											</li>

											<li>
												<a data-barba="" href="contact-1.html">
													Contact
												</a>
											</li>
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

								<div className="relative ml-30 xl:ml-20">
									<button
										className="d-flex items-center text-dark-1"
										data-el-toggle=".js-cart-toggle"
									>
										<i className="text-20 icon icon-basket"></i>
									</button>

									<div className="toggle-element js-cart-toggle">
										<div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
											<div className="px-30 pt-30 pb-10">
												<div className="row justify-between x-gap-40 pb-20">
													<div className="col">
														<div className="row x-gap-10 y-gap-10">
															<div className="col-auto">
																<img src="/assets/img/menus/cart/1.png" alt="image" />
															</div>

															<div className="col">
																<div className="text-dark-1 lh-15">
																	The Ultimate Drawing Course Beginner to
																	Advanced...
																</div>

																<div className="d-flex items-center mt-10">
																	<div className="lh-12 fw-500 line-through text-light-1 mr-10">
																		$179
																	</div>
																	<div className="text-18 lh-12 fw-500 text-dark-1">
																		$79
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div className="col-auto">
														<button>
															<img src="/assets/img/menus/close.svg" alt="icon" />
														</button>
													</div>
												</div>

												<div className="row justify-between x-gap-40 pb-20">
													<div className="col">
														<div className="row x-gap-10 y-gap-10">
															<div className="col-auto">
																<img src="/assets/img/menus/cart/2.png" alt="image" />
															</div>

															<div className="col">
																<div className="text-dark-1 lh-15">
																	User Experience Design Essentials - Adobe XD
																	UI UX...
																</div>

																<div className="d-flex items-center mt-10">
																	<div className="lh-12 fw-500 line-through text-light-1 mr-10">
																		$179
																	</div>
																	<div className="text-18 lh-12 fw-500 text-dark-1">
																		$79
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div className="col-auto">
														<button>
															<img src="/assets/img/menus/close.svg" alt="icon" />
														</button>
													</div>
												</div>
											</div>

											<div className="px-30 pt-20 pb-30 border-top-light">
												<div className="d-flex justify-between">
													<div className="text-18 lh-12 text-dark-1 fw-500">
														Total:
													</div>
													<div className="text-18 lh-12 text-dark-1 fw-500">
														$659
													</div>
												</div>

												<div className="row x-gap-20 y-gap-10 pt-30">
													<div className="col-sm-6">
														<button className="button py-20 -dark-1 text-white -dark-button-white col-12">
															View Cart
														</button>
													</div>
													<div className="col-sm-6">
														<button className="button py-20 -purple-1 text-white col-12">
															Checkout
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="d-none xl:d-block ml-20">
									<button
										className="text-dark-1 items-center"
										data-el-toggle=".js-mobile-menu-toggle"
									>
										<i className="text-11 icon icon-mobile-menu"></i>
									</button>
								</div>
							</div>

							<div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
								<a href="login.html" className="button -underline text-dark-1">
									Log in
								</a>
								<a
									href="signup.html"
									className="button px-25 h-50 -dark-1 text-white ml-20"
								>
									Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
