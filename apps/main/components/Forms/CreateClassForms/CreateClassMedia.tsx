import React from 'react'

type Props = {}

export default function CreateClassMedia({}: Props) {
	return (
		<div className="col-12">
			<form className="contact-form d-flex lg:flex-column">
				<div className="relative shrink-0">
					<img className="w-1/1" src="/assets/img/dashboard/media/1.png" alt="image" />

					<div className="absolute-full-center d-flex justify-end py-20 px-20">
						<a
							href="#"
							className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
						>
							<i className="icon-bin text-16"></i>
						</a>
					</div>
				</div>

				<div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
					<div className="form-upload col-12">
						<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
							Course thumbnail*
						</label>
						<div className="form-upload__wrap">
							<input type="text" name="name" placeholder="Cover-1.html" />
							<button className="button -dark-3 text-white">
								Upload Files
							</button>
						</div>
					</div>

					<p className="mt-10">
						Upload your course image here. It must meet our course image quality
						standards to be accepted. Important guidelines: 750x440 pixels;
						.jpg, .jpeg,. gif, or .png. no text on the image.
					</p>
				</div>
			</form>
		</div>
	)
}
