import React, { useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, useToast, VStack } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
	onSubmit: (data: any) => void
	loading: boolean
}

export default function SignupForm({ onSubmit,loading }: Props) {
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password_confirmation, setPasswordConfirmation] = useState('');
	const toast = useToast()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (password !== password_confirmation) {
			return toast({
				title: 'Password mismatch',
				description: 'Please check your password and try again',
				status: 'error',
				isClosable: true,
			})
		}
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
		onSubmit(data)
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
				<div>
					<Alert status="error" rounded='xl'>
						<AlertIcon />
						<VStack>
							{/* <AlertTitle>Your browser is outdated!</AlertTitle> */}
							<AlertDescription>
								By signing up you are accepting the terms.
							</AlertDescription>
						</VStack>
					</Alert>
				</div>
				<div className="col-12">
					<Button
						className="button -md -purple-1 text-white fw-500 w-1/1"
						type="submit"
						name="submit"
						id="submit"
						isLoading={loading}
					>
						Accept and Register
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
