import React from 'react'
import CreateClassMedia from './CreateClassMedia'
import { Divider } from '@chakra-ui/react'

type Props = {}

export default function ClassFormBasic({}: Props) {
	return (
		<form className="contact-form row y-gap-30" action="#">
			<div className="col-12">
				<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
					Course Title*
				</label>

				<input
					type="text"
					placeholder="Learn Figma - UI/UX Design Essential Training"
				/>
			</div>

			<div className="col-12">
				<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
					Short Description*
				</label>

				<textarea placeholder="Description" rows={7}></textarea>
			</div>

			<div className="col-12">
				<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
					Class Thumbnail*
				</label>

				<CreateClassMedia />
			</div>
			<hr className="py-0 mt-20" />
			<div className="col-12">
				<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
					Class Intro Video
				</label>

				<CreateClassMedia />
			</div>

			<div className="row y-gap-20 justify-end pt-15">
				<div className="col-auto">
					<button className="button -md -purple-1 text-white">Next</button>
				</div>
			</div>
		</form>
	)
}
