import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'
import LoginForm from '../components/Auth/LoginFrom'
import AuthContainer from '../components/Auth/AuthContainer'

export default function Login() {
	return (
		<MainLayout>
			<AuthContainer>
				<LoginForm />
			</AuthContainer>
		</MainLayout>
	)
}
