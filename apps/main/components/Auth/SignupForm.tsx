import React from 'react'

type Props = {}

export default function SignupForm({}: Props) {
  return (
		<div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
			<h3 className="text-30 lh-13">Sign Up</h3>
			<p className="mt-10">
				Already have an account?{' '}
				<a href="login.html" className="text-purple-1">
					Log in
				</a>
			</p>

			<form
				className="contact-form respondForm__form row y-gap-20 pt-30"
				action="#"
			>
				<div className="col-lg-6">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Email address *
					</label>
					<input type="text" name="title" placeholder="Name" />
				</div>
				<div className="col-lg-6">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Username *
					</label>
					<input type="text" name="title" placeholder="Name" />
				</div>
				<div className="col-lg-6">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Password *
					</label>
					<input type="text" name="title" placeholder="Name" />
				</div>
				<div className="col-lg-6">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Confirm Password *
					</label>
					<input type="text" name="title" placeholder="Name" />
				</div>
				<div className="col-12">
					<button
						type="submit"
						name="submit"
						id="submit"
						className="button -md -purple-1 text-white fw-500 w-1/1"
					>
						Register
					</button>
				</div>
			</form>

			<div className="lh-12 text-dark-1 fw-500 text-center mt-20">
				Or sign in using
			</div>

			<div className="d-flex x-gap-20 items-center justify-between pt-20">
				<div>
					<button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
						Log In via Facebook
					</button>
				</div>
				<div>
					<button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
						Log In via Google+
					</button>
				</div>
			</div>
		</div>
	)
}