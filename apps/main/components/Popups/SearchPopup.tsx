import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { AppStore } from '../../interface'

export default function SearchPopup() {
	const { show_search_popup } = useSelector((state: AppStore) => state.view)

	return (
		<Modal isOpen={show_search_popup} onClose={() => {}} size={['full', 'xl']}>
			<ModalOverlay />
			<ModalContent
				minW={['', '90vw']}
				marginTop={'6px'}
				rounded={['0px', '8px']}
			>
				<ModalBody>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
						totam amet voluptates accusamus! Exercitationem dignissimos alias
						illo enim quae ullam distinctio? Quasi commodi possimus magni fugit
						praesentium quia nulla.
					</p>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
