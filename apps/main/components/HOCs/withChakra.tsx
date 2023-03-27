import React from 'react'
import { useToast } from '@chakra-ui/react'

export interface withChakraProps {
    toast: any
}

export const withChakra = (WrappedComponent: any) => {
	const HOC = () => {
		const toast = useToast();

		const props:withChakraProps = { toast }
		return <WrappedComponent {...props} />
	}

	return HOC
}
