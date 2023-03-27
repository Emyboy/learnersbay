import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
	onSubmit: (data: { identifier: string; password: string }) => void
	loading: boolean
}

export default function LoginForm({ onSubmit, loading }: Props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = {
			identifier: email.trim().replace(/ /g, '').toLowerCase(),
			password,
		}
		onSubmit(data)
	}

	return (
		<>
			<h3 className="text-30 lh-13">Login</h3>
			<p className="mt-10">
				{`Don't`} have an account?{' '}
				<Link href="/register" className="text-purple-1">
					Register
				</Link>
			</p>

			<form
				className="contact-form respondForm__form row y-gap-20 pt-30"
				onSubmit={handleSubmit}
			>
				<div className="col-lg-12">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Email address
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						required
						type="email"
						name="email"
						placeholder="Ex. joinDoe@mail.com"
					/>
				</div>
				{/* { // todo - user should be able to view password } */}
				<div className="col-lg-12">
					<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
						Password
					</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						required
						type="password"
						name="password"
						placeholder="* * * * * * *"
					/>
				</div>

				<div className="col-12">
					<Button
						type="submit"
						name="submit"
						id="submit"
						className="button -md -purple-1 text-white fw-500 w-1/1"
						isLoading={loading}
					>
						Login
					</Button>
				</div>
			</form>

			{/* <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
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
			</div> */}
		</>
	)
}
