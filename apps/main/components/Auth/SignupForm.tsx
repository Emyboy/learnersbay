import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { API } from '../../utils/API.utils'
import Cookies from 'js-cookie'
import { setAuthState } from '../../redux/actions/auth.actions'
import { withChakra, withChakraProps } from '../HOCs/withChakra'

type Props = {} & withChakraProps

export default withChakra(function SignupForm({ toast }: Props) {
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirmation, setPasswordConfirmation] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			if (password !== password_confirmation) {
				return toast({
					title: 'Password mismatch',
					description: 'Please check your password and try again',
					status: 'error',
					isClosable: true,
				})
			}
			setLoading(true)
			const data = {
				email: email.trim().replace(/ /g, '').toLowerCase(),
				password,
				first_name: first_name
					.trim()
					.split(' ')[0]
					.toLowerCase()
					.replace(/[^a-zA-Z ]/g, ''),
				last_name: last_name
					.trim()
					.split(' ')[0]
					.toLowerCase()
					.replace(/[^a-zA-Z ]/g, ''),
			}

			const res = await API(`/auth/local/register`, false, {
				data,
				method: 'POST',
			})
			setLoading(false)

			Cookies.set('auth_token', res.data.jwt)
			setAuthState({ user: res.data.user })
		} catch (error) {
			setLoading(false)
			return Promise.reject(error)
		}
	}

	return (
		<>
			<h3 className="text-30 lh-13">Sign Up</h3>
			<p className="mt-10">
				Already have an account?{' '}
				<Link href="/login" className="text-purple-1">
					Log in
				</Link>
			</p>

			<form
				className="contact-form respondForm__form row y-gap-20 pt-30"
				onSubmit={handleSubmit}
			>
				<div className="col-lg-6">
					<label
						htmlFor="first_name"
						className="text-16 lh-1 fw-500 text-dark-1 mb-10"
					>
						First Name
					</label>
					<input
						required
						id="first_name"
						type="text"
						name="first_name"
						placeholder="Ex John"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="col-lg-6">
					<label
						htmlFor="last_name"
						className="text-16 lh-1 fw-500 text-dark-1 mb-10"
					>
						Last Name
					</label>
					<input
						id="last_name"
						required
						type="text"
						name="last_name"
						placeholder="Ex. Doe"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="col-lg-12">
					<label
						htmlFor="email_address"
						className="text-16 lh-1 fw-500 text-dark-1 mb-10"
					>
						Email address
					</label>
					<input
						id="email_address"
						required
						type="email"
						name="title"
						placeholder="johnDoe@mail.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="col-lg-6">
					<label
						htmlFor="password"
						className="text-16 lh-1 fw-500 text-dark-1 mb-10"
					>
						Password
					</label>
					<input
						id="password"
						required
						type="password"
						name="title"
						placeholder="* * * * * *"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="col-lg-6">
					<label
						htmlFor="confirm_password"
						className="text-16 lh-1 fw-500 text-dark-1 mb-10"
					>
						Confirm Password
					</label>
					<input
						id="confirm_password"
						required
						type="password"
						name="title"
						placeholder="* * * * * *"
						onChange={(e) => setPasswordConfirmation(e.target.value)}
					/>
				</div>
				<div className="col-12">
					<Button
						className="button -md -purple-1 text-white fw-500 w-1/1"
						type="submit"
						name="submit"
						id="submit"
						isLoading={loading}
					>
						Register
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
})
