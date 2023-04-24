import React, { useState } from 'react'
import axios from 'axios'

type Props = {
	onSubmit: (data: any) => void
}

export function LoginForm({ onSubmit }: Props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: any) => {
		try {
			e.preventDefault()
			setLoading(true)
			const data = {
				identifier: email,
				password,
			}
			const res = await axios(process.env.NEXT_PUBLIC_API_URL + `/auth/local`, {
				data,
				method: 'POST',
			})
			onSubmit(res.data)
		} catch (error) {
			setLoading(false)
			return Promise.reject(error)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-[26rem] p-4 sm:px-5">
			<div className="text-center">
				<img
					className="mx-auto h-16 w-16"
					src="/assets/images/app-logo.svg"
					alt="logo"
				/>
				<div className="mt-4">
					<h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
						Welcome To Lineone
					</h2>
					<p className="text-slate-400 dark:text-navy-300">
						Please sign up to continue
					</p>
				</div>
			</div>
			<div className="card mt-5 rounded-lg p-5 lg:p-7">
				<label className="relative flex">
					<input
						className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
						placeholder="Ex. Joih@mail.com"
						type="email"
						onChange={(e: any) => setEmail(e.target.value)}
					/>
					<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 transition-colors duration-200"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
					</span>
				</label>
				<label className="relative mt-4 flex">
					<input
						className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
						placeholder="Password"
						type="password"
						onChange={(e: any) => setPassword(e.target.value)}
					/>
					<span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 transition-colors duration-200"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							></path>
						</svg>
					</span>
				</label>

				<button
					className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
					disabled={loading}
				>
					{loading ? (
						<div className="spinner h-5 w-5 animate-spin rounded-full border-[3px] border-slate-150 border-r-slate-400 dark:border-navy-500- dark:border-r-navy-300-"></div>
					) : (
						'Login'
					)}
				</button>
				<div className="mt-4 text-center text-xs+">
					<p className="line-clamp-1">
						<span>Already have an account? </span>
						<a
							className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
							href="/authentication/register"
						>
							Register
						</a>
					</p>
				</div>
				<div className="my-7 flex items-center space-x-3">
					<div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
					<p className="text-tiny+ uppercase">or sign up with email</p>
					<div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
				</div>
				<div className="flex space-x-4">
					<button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
						<img
							className="h-5.5 w-5.5"
							src="/assets/images/logos/google.svg"
							alt="logo"
						/>
						<span>Google</span>
					</button>
					<button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
						<img
							className="h-5.5 w-5.5"
							src="/assets/images/logos/github.svg"
							alt="logo"
						/>
						<span>Github</span>
					</button>
				</div>
			</div>
		</form>
	)
}
