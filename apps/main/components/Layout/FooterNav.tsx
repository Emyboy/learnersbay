import { Box, Flex, Icon, VStack, Text } from '@chakra-ui/react'
import {
	RiNotification3Line,
	RiPlayCircleLine,
	RiHome2Line,
	RiMenu2Fill,
	RiCompass3Line,
	RiCalendarTodoLine,
} from 'react-icons/ri'
import React from 'react'
import { useDispatch } from 'react-redux'

type Props = {}

let size = '24'
export default function FooterNav({}: Props) {
	const dispatch = useDispatch()

	return (
		<Box
			style={{ zIndex: 1 }}
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
				<div
					onClick={() =>
						dispatch({
							type: 'TOGGLE_SIDE_NAV',
							payload: { show_side_nav: true },
						})
					}
				>
					<EachNav as={RiMenu2Fill} title="More" />
				</div>
				<EachNav as={RiCalendarTodoLine} title="Calender" active />
				<EachNav as={RiPlayCircleLine} title="My Classes" />
				<EachNav as={RiNotification3Line} title="Activities" />
			</Flex>
		</Box>
	)
}

const EachNav = ({
	as,
	title,
	active,
}: {
	as: any
	title: string
	active?: boolean
}) => {
	return (
		<VStack>
			<Icon
				as={as}
				fontSize={size}
				className={`${active && `text-purple-1`}`}
			/>
			<Text as="p" className={`${active ? 'text-purple-1 fw-600' : 'fw-400'} mt-0`}>
				{title}
			</Text>
		</VStack>
	)
}
