import React from 'react'

type Props = {}

export default function ClassDetailsOverview({}: Props) {
	return (
		<div className="tabs__pane -tab-item-1 is-active">
			<h4 className="text-20 fw-500">Description</h4>

			<div className="show-more mt-30 js-show-more">
				<div className="show-more__content" style={{ maxHeight: `260px` }}>
					<p className="">
						{`Phasellus enim magna, varius et commodo ut, ultricies vitae velit.
						Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel
						justo. In libero urna, venenatis sit amet ornare non, suscipit nec
						risus. Sed consequat justo non mauris pretium at tempor justo
						sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur.`}
						<br />
						<br />
						{`This course is aimed at people interested in UI/UX Design. We’ll
						start from the very beginning and work all the way through, step by
						step. If you already have some UI/UX Design experience but want to
						get up to speed using Adobe XD then this course is perfect for you
						too!`}
						<br />
						<br />
						{`First, we will go over the differences between UX and UI Design. We
						will look at what our brief for this real-world project is, then we
						will learn about low-fidelity wireframes and how to make use of
						existing UI design kits.`}
					</p>
				</div>

				<button className="show-more__button text-purple-1 fw-500 underline mt-30">
					Show more
				</button>
			</div>

			<div className="mt-60">
				<h4 className="text-20 fw-500 mb-30">{`What you'll learn`}</h4>
				<div className="row x-gap-100 justfiy-between">
					<div className="col-md-6">
						<div className="y-gap-20">
							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Become a UX designer.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>You will be able to add UX designer to your CV</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Become a UI designer.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Build &amp; test a full website design.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Create your first UX brief &amp; persona.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>How to use premade UI kits.</p>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="y-gap-20">
							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Create quick wireframes.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Downloadable exercise files</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Build a UX project from beginning to end.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>Learn to design websites &amp; mobile phone apps.</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>All the techniques used by UX professionals</p>
							</div>

							<div className="d-flex items-center">
								<div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
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
										className="feather feather-check size-12"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<p>You will be able to talk correctly with other UX design.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-60">
				<h4 className="text-20 fw-500">Requirements</h4>
				<ul className="ul-list y-gap-15 pt-30">
					<li>
						You will need a copy of Adobe XD 2019 or above. A free trial can be
						downloaded from Adobe.
					</li>
					<li>No previous design experience is needed.</li>
					<li>No previous Adobe XD skills are needed.</li>
				</ul>
			</div>
		</div>
	)
}
