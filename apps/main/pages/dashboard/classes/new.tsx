import React from 'react'
import ClassFormBasic from '../../../components/Forms/CreateClassForms/ClassFormBasic'
import FormContainer from '../../../components/Forms/FormContainer'

export default function NewClass() {
	return (
		<div className="bg-light-4 pt-40" style={{ minHeight: '100vh' }}>
			<div className="container">
				<div className="row pb-50 mb-10">
					<div className="col-auto">
						<h1 className="text-30 lh-12 fw-700">Create New Class</h1>
						<div className="mt-10">
							Lorem ipsum dolor sit amet, consectetur.
						</div>
					</div>
				</div>
				{/* <div className="row y-gap-60">
					<div className="col-12">
						<div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
							<div className="d-flex items-center py-20 px-30 border-bottom-light">
								<h2 className="text-17 lh-1 fw-500">Basic Information</h2>
							</div>
						</div>
					</div>
				</div> */}
                <FormContainer>
                    <ClassFormBasic />
                </FormContainer>
			</div>
		</div>
	)
}
