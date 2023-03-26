import React from 'react'

type Props = {}

export default function ClassDetailsJumbotron({}: Props) {
	return (
		<section className="page-header -type-5 bg-dark-1">
			<div className="page-header__bg">
				<div
					className="bg-image js-lazy loaded"
					data-ll-status="loaded"
					style={{
						backgroundImage: `url(/assets/img/event-single/bg.png)`,
					}}
				></div>
			</div>

			<div className="container">
				<div className="page-header__content pt-80 pb-90">
					<div className="row y-gap-30 justify-between">
						<div className="col-xl-6 col-lg-6">
							<div className="d-flex x-gap-15 y-gap-10 pb-20">
								<div>
									<div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
										BEST SELLER
									</div>
								</div>
								<div>
									<div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
										NEW
									</div>
								</div>
								<div>
									<div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
										POPULAR
									</div>
								</div>
							</div>

							<div data-anim="slide-up delay-1" className="is-in-view">
								<h1 className="text-30 lh-14 text-white pr-60 lg:pr-0">
									User Experience Design Essentials - Adobe XD UI UX Design
								</h1>
							</div>

							<p className="text-dark-3 mt-20">
								Use XD to get a job in UI Design, User Interface, User
								Experience design, UX design &amp; Web Design
							</p>

							<div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
								<div className="d-flex items-center text-dark-3">
									<div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
									<div className="d-flex x-gap-5 items-center">
										<div className="icon-star text-11 text-yellow-1"></div>
										<div className="icon-star text-11 text-yellow-1"></div>
										<div className="icon-star text-11 text-yellow-1"></div>
										<div className="icon-star text-11 text-yellow-1"></div>
										<div className="icon-star text-11 text-yellow-1"></div>
									</div>
									<div className="text-14 lh-1 ml-10">(1991)</div>
								</div>

								<div className="d-flex items-center text-dark-3">
									<div className="icon icon-person-3 text-13"></div>
									<div className="text-14 ml-8">
										853 enrolled on this course
									</div>
								</div>

								<div className="d-flex items-center text-dark-3">
									<div className="icon icon-wall-clock text-13"></div>
									<div className="text-14 ml-8">Last updated 11/2021</div>
								</div>
							</div>

							<div className="d-flex items-center pt-20">
								<div
									className="bg-image size-30 rounded-full js-lazy loaded"
									data-ll-status="loaded"
									style={{
										backgroundImage: `url(img/avatars/small-1.png)`,
									}}
								></div>
								<div className="text-14 lh-1 ml-10 text-dark-3">Ali Tufan</div>
							</div>

							<div className="mt-30">
								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-video-file"></div>
										<div className="ml-10">Lessons</div>
									</div>
									<div className="text-white">20</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-puzzle"></div>
										<div className="ml-10">Quizzes</div>
									</div>
									<div className="text-white">3</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-clock-2"></div>
										<div className="ml-10">Duration</div>
									</div>
									<div className="text-white">13 Hours</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-bar-chart-2"></div>
										<div className="ml-10">Skill level</div>
									</div>
									<div className="text-white">Beginner</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-translate"></div>
										<div className="ml-10">Language</div>
									</div>
									<div className="text-white">English</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-badge"></div>
										<div className="ml-10">Certificate</div>
									</div>
									<div className="text-white">Yes</div>
								</div>

								<div className="d-flex justify-between py-8 border-bottom-light-2">
									<div className="d-flex items-center text-white">
										<div className="icon-infinity"></div>
										<div className="ml-10">Full lifetime access</div>
									</div>
									<div className="text-white">Yes</div>
								</div>
							</div>

							<div className="d-flex mt-30">
								<a
									href="#"
									className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
								>
									<i className="fa fa-facebook"></i>
								</a>

								<a
									href="#"
									className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
								>
									<i className="fa fa-twitter"></i>
								</a>

								<a
									href="#"
									className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
								>
									<i className="fa fa-instagram"></i>
								</a>

								<a
									href="#"
									className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
								>
									<i className="fa fa-linkedin"></i>
								</a>
							</div>
						</div>

						<div className="col-xl-5 col-lg-6">
							<div className="relative">
								<img className="w-1/1" src="/assets/img/misc/1.png" alt="image" />
								<div className="absolute-full-center d-flex justify-center items-center">
									<a
										href="https://www.youtube.com/watch?v=ANYfx4-jyqY"
										className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery"
										data-gallery="gallery1"
									>
										<div className="icon-play text-18"></div>
									</a>
								</div>
							</div>

							<div className="mt-30">
								<div className="d-flex justify-between items-center">
									<div className="text-24 lh-1 text-white fw-500">$96.00</div>
									<div className="lh-1 line-through text-dark-3">$76.00</div>
								</div>

								<div className="row x-gap-30 y-gap-20 pt-30">
									<div className="col-sm-6">
										<button className="button -md -purple-1 text-white w-1/1">
											Add To Cart
										</button>
									</div>
									<div className="col-sm-6">
										<button className="button -md -outline-green-1 text-green-1 w-1/1">
											Buy Now
										</button>
									</div>
								</div>

								<div className="text-14 lh-1 text-dark-3 mt-30">
									30-Day Money-Back Guarantee
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
