import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'
import LoginForm from '../components/Auth/LoginFrom'
import AuthContainer from '../components/Auth/AuthContainer'
import { API } from '../utils/API.utils'
import Cookies from 'js-cookie'
import { setAuthState } from '../redux/actions/auth.actions'
import { withChakra, withChakraProps } from '../components/HOCs/withChakra'
import { AppStore } from '../interface'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default withChakra(function Login({ showAxiosError }: withChakraProps) {
	const [loading, setLoading] = React.useState(false)
	const { user } = useSelector((state: AppStore) => state.auth)
	const router = useRouter()

	const handleLogin = async (data: any) => {
		try {
			setLoading(true)
			const res = await API(`/auth/local`, false, {
				data,
				method: 'POST',
			})
			Cookies.set('auth_token', res.data.jwt, { expires: 30 })
			setAuthState({
				user: res.data.user,
			})
			router.push(localStorage.getItem('after_login') || '/')
			setLoading(false)
		} catch (error) {
			setLoading(false)
			showAxiosError(error)
			return Promise.reject(error)
		}
	}

	if (user) {
		router.push(localStorage.getItem('after_login') || '/')
		return null
	}

	return (
		<MainLayout>
			<AuthContainer>
				<LoginForm onSubmit={handleLogin} loading={loading} />
			</AuthContainer>
		</MainLayout>
	)
})
