import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'
import AuthContainer from '../components/Auth/AuthContainer'

export default function Signup() {
	return (
		<MainLayout>
			<AuthContainer>
				<SignupForm />
			</AuthContainer>
		</MainLayout>
	)
}
