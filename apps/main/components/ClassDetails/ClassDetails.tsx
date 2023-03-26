import React from 'react'
import ClassDetailsJumbotron from './ClassDetailsJumbotron'
import ClassDetailsBreadcrumbs from './ClassDetailsBreadcrumbs'
import ClassDetailsOverview from './ClassDetailsOverview'
import ClassDetailsReview from './ClassDetailsReview'
import ClassDetailsTutor from './ClassDetailsTutor'
import ClassDetailsPreview from './ClassDetailsPreview'

type Props = {}

export default function ClassDetails({}: Props) {
	return (
		<>
			<ClassDetailsBreadcrumbs />
			<ClassDetailsJumbotron />
			<section className="layout-pt-lg layout-pb-md">
				<div className="container">
					<div className="tabs -side js-tabs">
						<div className="row y-gap-40">
							<div className="col-lg-4">
								<ClassDetailsPreview />
							</div>
							<div className="col-lg-8">
								<div className="tabs__content js-tabs-content">
									<ClassDetailsOverview />
									<br />
									<br />
									<ClassDetailsTutor />
									<br />
									<br />
									<ClassDetailsReview />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
