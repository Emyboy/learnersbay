import React, { useState } from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'
import AuthContainer from '../components/Auth/AuthContainer'
import { withChakra, withChakraProps } from '../components/HOCs/withChakra'
import { API } from '../utils/API.utils'
import Cookies from 'js-cookie'
import { setAuthState } from '../redux/actions/auth.actions'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { AppStore } from '../interface'

export default withChakra(function Signup({
	toast,
	showAxiosError,
}: withChakraProps) {
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const { user } = useSelector((state: AppStore) => state.auth)

	const handleSubmit = async (data: any) => {
		try {
			setLoading(true)
			const res = await API(`/auth/local/register`, false, {
				data,
				method: 'POST',
			})
			setLoading(false)

			Cookies.set('auth_token', res.data.jwt)
			setAuthState({ user: res.data.user })
			router.push(localStorage.getItem('after_login') || '/')
		} catch (error: any) {
			showAxiosError(error)
			setLoading(false)
			return Promise.reject(error)
		}
	}

	if (user) {
		router.push('/')
		return null
	}

	return (
		<MainLayout>
			<AuthContainer>
				<SignupForm onSubmit={handleSubmit} loading={loading} />
			</AuthContainer>
		</MainLayout>
	)
})
