import React from 'react'
import { useToast } from '@chakra-ui/react'

export interface withChakraProps {
	toast: any
	showAxiosError: (error: any) => void
}

export const withChakra = (WrappedComponent: any) => {
	const HOC = () => {
		const toast = useToast()
		const showAxiosError = (
			error:any
		) => {
			return toast({
				title: error?.response?.data?.error.message || "Error, please try again"
					?.replace('or Username', '')
					.replace(`identifier`, 'email'),
				status: 'error',
			})
		}

		const props: withChakraProps = { toast, showAxiosError }
		return <WrappedComponent {...props} />
	}

	return HOC
}
