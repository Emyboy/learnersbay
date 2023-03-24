import React from 'react'

type Props = {}

export default function EachHomeClass({}: Props) {
	return (
		<div data-anim-child="slide-up delay-1" className="col-lg-6 is-in-view">
			<a
				href="#"
				className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
			>
				<div className="coursesCard__image max-w-250 rounded-8">
					<img
						className="w-1/1 rounded-8"
						src="/assets/img/coursesCards/3.png"
						alt="image"
					/>
				</div>

				<div className="coursesCard__content pl-20 sm:pl-10 pr-10">
					<div className="coursesCard__stars">
						<img src="/assets/img/coursesCards/icons/review.svg" alt="review" />
					</div>
					<div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
						Learn Figma - UI/UX Design Essential Training
					</div>

					<div className="d-flex x-gap-15 items-center py-10">
						<div className="d-flex items-center">
							<div className="mr-10">
								<img src="/assets/img/coursesCards/icons/1.svg" alt="icon" />
							</div>
							<div className="text-14 lh-1 text-light-1">6 lesson</div>
						</div>

						<div className="d-flex items-center">
							<div className="mr-10">
								<img src="/assets/img/coursesCards/icons/2.svg" alt="icon" />
							</div>
							<div className="text-14 lh-1 text-light-1">3h 56m</div>
						</div>

						<div className="d-flex items-center">
							<div className="mr-10">
								<img src="/assets/img/coursesCards/icons/3.svg" alt="icon" />
							</div>
							<div className="text-14 lh-1 text-light-1">Beginner</div>
						</div>
					</div>

					<div className="d-flex justify-between items-center pt-10 border-top-light">
						<div className="d-flex items-center">
							<img src="/assets/img/general/avatar-1.png" alt="image" />
							<div className="text-light-1 ml-10">Ali Tufan</div>
						</div>

						<div className="d-flex items-center">
							<div className="fw-500 mr-10 line-through text-light-1">$179</div>
							<div className="text-18 fw-500 text-dark-1">$79</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}
