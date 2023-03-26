import React from 'react'

type Props = {}

export default function EachClassXl({}: Props) {
	return (
		<div className="col-12 border-bottom-light">
			<a
				href="#"
				className="coursesCard -type-1 row y-gap-20 flex-row items-center"
			>
				<div className="col-xl-3 col-lg-4">
					<div className="coursesCard__image rounded-8 relative">
						<img
							className="w-1/1 rounded-8"
							src="/assets/img/coursesCards/1.png"
							alt="image"
						/>
						<div className="coursesCard__image_overlay rounded-8"></div>
					</div>
				</div>

				<div className="col">
					<div className="d-flex items-center">
						<div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
						<div className="d-flex x-gap-5 items-center">
							<div className="icon-star text-9 text-yellow-1"></div>
							<div className="icon-star text-9 text-yellow-1"></div>
							<div className="icon-star text-9 text-yellow-1"></div>
							<div className="icon-star text-9 text-yellow-1"></div>
							<div className="icon-star text-9 text-yellow-1"></div>
						</div>
						<div className="text-13 lh-1 ml-10">(1991)</div>
					</div>

					<div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
						Learn Figma - UI/UX Design Essential Training
					</div>
					<div className="mt-8">
						Introductory course on web hosting, domain registration, and how you
						can easily publish and edit your website online.
					</div>

					<div className="row x-gap-10 y-gap-10 items-center pt-10">
						<div className="col-auto">
							<div className="d-flex items-center">
								<img src="/assets/img/general/avatar-1.png" alt="image" />
								<div className="ml-10">Ali Tufan</div>
							</div>
						</div>

						<div className="col-auto">
							<div className="d-flex items-center">
								<img
									className="mr-8"
									src="/assets/img/coursesCards/icons/1.svg"
									alt="icon"
								/>
								<div className="text-14 lh-1">6 lesson</div>
							</div>
						</div>

						<div className="col-auto">
							<div className="d-flex items-center">
								<img
									className="mr-8"
									src="/assets/img/coursesCards/icons/2.svg"
									alt="icon"
								/>
								<div className="text-14 lh-1">3h 56m</div>
							</div>
						</div>

						<div className="col-auto">
							<div className="d-flex items-center">
								<img
									className="mr-8"
									src="/assets/img/coursesCards/icons/3.svg"
									alt="icon"
								/>
								<div className="text-14 lh-1">Beginner</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-auto md:d-none">
					<div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
				</div>

				<div className="col-md-auto">
					<div className="text-right md:text-left">
						<div className="text-15 lh-1 fw-500 line-through">$179</div>
						<div className="text-24 lh-1 fw-500 text-dark-1 mt-10">$279</div>
					</div>
					<div className="row x-gap-20 y-gap-20 items-center pt-25">
						<div className="col-auto">
							<button className="button h-50 px-30 -purple-3 text-purple-1">
								Add to cart
							</button>
						</div>
						<div className="col-auto">
							<button className="button size-50 rounded-full -purple-3 text-light-1">
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
									className="feather feather-heart size-20"
								>
									<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}
