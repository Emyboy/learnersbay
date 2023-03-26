import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import EachClassXl from '../../components/EachClass/EachClassXl'

export default function Classes() {
	const router = useRouter()
	const theQuery = router.query

	console.log('THE QUERY --', theQuery)
	return (
		<MainLayout>
			<section className="layout-pt-md layout-pb-md">
				<div className="container is-in-view">
					<div className='page-header -type-1'>
						<h1>Add horizontal category select here</h1>
					</div>
					<div className="accordion js-accordion">
						<div className="accordion__item">
							<div className="row y-gap-20 items-center justify-between pb-30">
								<div className="col-auto">
									<div className="text-14 lh-12">
										Showing <span className="text-dark-1 fw-500">250</span>{' '}
										total results
									</div>
								</div>
								<div className="col-auto">
									<div className="row x-gap-20 y-gap-20">
										<div className="col-auto">
											<div className="d-flex items-center">
												<div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
													Sort by:
												</div>

												<div className="dropdown js-dropdown js-category-active">
													<div
														className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
														data-el-toggle=".js-category-toggle"
														data-el-toggle-active=".js-category-active"
													>
														<span className="js-dropdown-title">
															Most Popular
														</span>
														<i className="icon text-9 ml-40 icon-chevron-down"></i>
													</div>

													<div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
														<div className="text-14 y-gap-15 js-dropdown-list">
															<div>
																<a
																	href="#"
																	className="d-block js-dropdown-link"
																>
																	Animation
																</a>
															</div>

															<div>
																<a
																	href="#"
																	className="d-block js-dropdown-link"
																>
																	Design
																</a>
															</div>

															<div>
																<a
																	href="#"
																	className="d-block js-dropdown-link"
																>
																	Illustration
																</a>
															</div>

															<div>
																<a
																	href="#"
																	className="d-block js-dropdown-link"
																>
																	Business
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-auto">
											<div className="accordion__button w-unset">
												<button className="button h-50 px-30 -light-7 text-purple-1">
													<i className="icon-filter mr-10"></i>
													Filter
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row y-gap-60">
						<EachClassXl />
						<EachClassXl />
						<EachClassXl />
						<EachClassXl />
					</div>
				</div>
			</section>
		</MainLayout>
	)
}
