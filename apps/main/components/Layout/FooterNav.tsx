import { Box, Flex, Icon, VStack } from '@chakra-ui/react'
import { RiNotification3Line,RiPlayCircleLine, RiHome2Line } from 'react-icons/ri'
import React from 'react'

type Props = {}

let size = '24'
export default function FooterNav({}: Props) {
	return (
		<Box
			as="footer"
			className="d-none xl:d-block -type-4 -shadow bg-white border-bottom-light js-header"
			position={'fixed'}
			bottom="0"
			left="0"
			right="0"
			borderColor={'gray.100'}
			borderWidth="thin"
			px="5"
		>
			<Flex
				alignItems="center"
				justifyContent={'space-between'}
				height={['70px', '80px']}
			>
				<EachNav as={RiHome2Line} title="Home" />
				<EachNav as={RiPlayCircleLine} title="My Classes" />
				<EachNav as={RiNotification3Line} title="Activities" />
			</Flex>
		</Box>
	)
}

const EachNav = ({as, title}:{as:any, title:string}) => {
    return (
			<VStack>
				<Icon as={as} fontSize={size} />
                <p className='fw-500 mt-0'>{title}</p>
			</VStack>
		)
}
