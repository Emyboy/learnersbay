import React from 'react'

type Props = {}

export default function ClassDetailsReview({}: Props) {
  return (
		<div className="tabs__pane -tab-item-4 is-active">
			<div className="blogPost -comments">
				<div className="blogPost__content">
					<h2 className="text-20 fw-500">Student feedback</h2>
					<div className="row x-gap-10 y-gap-10 pt-30">
						<div className="col-md-4">
							<div className="d-flex items-center justify-center flex-column py-50 text-center bg-light-6 rounded-8">
								<div className="text-60 lh-11 text-dark-1 fw-500">4.8</div>
								<div className="d-flex x-gap-5 mt-10">
									<div className="icon-star text-11 text-yellow-1"></div>
									<div className="icon-star text-11 text-yellow-1"></div>
									<div className="icon-star text-11 text-yellow-1"></div>
									<div className="icon-star text-11 text-yellow-1"></div>
									<div className="icon-star text-11 text-yellow-1"></div>
								</div>
								<div className="mt-10">Course Rating</div>
							</div>
						</div>

						<div className="col-md-8">
							<div className="py-20 px-30 bg-light-6 rounded-8">
								<div className="row y-gap-15">
									<div className="col-12">
										<div className="d-flex items-center">
											<div className="progress-bar w-1/1 mr-15">
												<div className="progress-bar__bg bg-light-12"></div>
												<div className="progress-bar__bar bg-purple-1 w-1/1"></div>
											</div>
											<div className="d-flex x-gap-5 pr-15">
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
											</div>
											<div className="text-dark-1">70%</div>
										</div>
									</div>

									<div className="col-12">
										<div className="d-flex items-center">
											<div className="progress-bar w-1/1 mr-15">
												<div className="progress-bar__bg bg-light-12"></div>
												<div className="progress-bar__bar bg-purple-1 w-1/2"></div>
											</div>
											<div className="d-flex x-gap-5 pr-15">
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
											</div>
											<div className="text-dark-1">15%</div>
										</div>
									</div>

									<div className="col-12">
										<div className="d-flex items-center">
											<div className="progress-bar w-1/1 mr-15">
												<div className="progress-bar__bg bg-light-12"></div>
												<div className="progress-bar__bar bg-purple-1 w-1/3"></div>
											</div>
											<div className="d-flex x-gap-5 pr-15">
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
											</div>
											<div className="text-dark-1">20%</div>
										</div>
									</div>

									<div className="col-12">
										<div className="d-flex items-center">
											<div className="progress-bar w-1/1 mr-15">
												<div className="progress-bar__bg bg-light-12"></div>
												<div className="progress-bar__bar bg-purple-1 w-1/5"></div>
											</div>
											<div className="d-flex x-gap-5 pr-15">
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
											</div>
											<div className="text-dark-1">3%</div>
										</div>
									</div>

									<div className="col-12">
										<div className="d-flex items-center">
											<div className="progress-bar w-1/1 mr-15">
												<div className="progress-bar__bg bg-light-12"></div>
												<div className="progress-bar__bar bg-purple-1 w-1/7"></div>
											</div>
											<div className="d-flex x-gap-5 pr-15">
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
												<div className="icon-star text-11 text-yellow-1"></div>
											</div>
											<div className="text-dark-1">2%</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<h2 className="text-20 fw-500 mt-60 lg:mt-40">Reviews</h2>
					<ul className="comments__list mt-30">
						<li className="comments__item">
							<div className="comments__item-inner md:direction-column">
								<div className="comments__img mr-20">
									<div
										className="bg-image rounded-full js-lazy loaded"
										data-ll-status="loaded"
										style={{ backgroundImage: `url("/assets/img/avatars/1.png")` }}
									></div>
								</div>

								<div className="comments__body md:mt-15">
									<div className="comments__header">
										<h4 className="text-17 fw-500 lh-15">
											Ali Tufan
											<span className="text-13 text-light-1 fw-400">
												3 Days ago
											</span>
										</h4>

										<div className="stars"></div>
									</div>

									<h5 className="text-15 fw-500 mt-15">The best LMS Design</h5>
									<div className="comments__text mt-10">
										<p>
											This course is a very applicable. Professor Ng explains
											precisely each algorithm and even tries to give an
											intuition for mathematical and statistic concepts behind
											each algorithm. Thank you very much.
										</p>
									</div>

									<div className="comments__helpful mt-20">
										<span className="text-13 text-purple-1">
											Was this review helpful?
										</span>
										<button className="button text-13 -sm -purple-1 text-white">
											Yes
										</button>
										<button className="button text-13 -sm -light-7 text-purple-1">
											No
										</button>
									</div>
								</div>
							</div>
						</li>

						<li className="comments__item">
							<div className="comments__item-inner md:direction-column">
								<div className="comments__img mr-20">
									<div
										className="bg-image rounded-full js-lazy loaded"
										data-ll-status="loaded"
										style={{ backgroundImage: `url("/assets/img/avatars/1.png")` }}
									></div>
								</div>

								<div className="comments__body md:mt-15">
									<div className="comments__header">
										<h4 className="text-17 fw-500 lh-15">
											Ali Tufan
											<span className="text-13 text-light-1 fw-400">
												3 Days ago
											</span>
										</h4>

										<div className="stars"></div>
									</div>

									<h5 className="text-15 fw-500 mt-15">The best LMS Design</h5>
									<div className="comments__text mt-10">
										<p>
											This course is a very applicable. Professor Ng explains
											precisely each algorithm and even tries to give an
											intuition for mathematical and statistic concepts behind
											each algorithm. Thank you very much.
										</p>
									</div>

									<div className="comments__helpful mt-20">
										<span className="text-13 text-purple-1">
											Was this review helpful?
										</span>
										<button className="button text-13 -sm -purple-1 text-white">
											Yes
										</button>
										<button className="button text-13 -sm -light-7 text-purple-1">
											No
										</button>
									</div>
								</div>
							</div>
						</li>

						<li className="comments__item">
							<div className="d-flex justify-center">
								<button className="text-purple-1 lh-12 underline fw-500">
									View All Reviews
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}