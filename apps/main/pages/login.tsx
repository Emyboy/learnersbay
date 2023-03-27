import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'
import LoginForm from '../components/Auth/LoginFrom'
import AuthContainer from '../components/Auth/AuthContainer'
import { API } from '../utils/API.utils'
import Cookies from 'js-cookie'
import { setAuthState } from '../redux/actions/auth.actions'
import { withChakra, withChakraProps } from '../components/HOCs/withChakra'

export default withChakra(function Login({ showAxiosError }: withChakraProps) {
	const [loading, setLoading] = React.useState(false)

	const handleLogin = async (data: any) => {
		try {
			const res = await API(`/auth/local`, false, {
				data,
				method: 'POST',
			})
			Cookies.set('auth_token', res.data.jwt)
			setAuthState({
				user: res.data.user,
			})
		} catch (error) {
			showAxiosError(error)
			return Promise.reject(error)
		}
	}

	return (
		<MainLayout>
			<AuthContainer>
				<LoginForm onSubmit={handleLogin} loading={loading} />
			</AuthContainer>
		</MainLayout>
	)
})
