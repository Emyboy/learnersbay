import React from 'react'

type Props = {
	children: React.ReactElement
}

export default function FormContainer({ children }: Props) {
	return (
		<div className="row y-gap-60">
			<div className="col-12">
				<div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
					<div className="d-flex items-center py-20 px-30 border-bottom-light">
						<h2 className="text-17 lh-1 fw-500">Basic Information</h2>
					</div>
					<div className="py-30 px-30">{children}</div>
				</div>
			</div>
		</div>
	)
}
