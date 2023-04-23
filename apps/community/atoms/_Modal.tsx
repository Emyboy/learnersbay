import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    ModalProps,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
    children: any;
    heading?: string;
    subHeading?: string;
};

export default function _Modal(props: Props & ModalProps) {
    const { children, heading, subHeading } = props;


    if (!props.isOpen) {
        return null
    }

    return (
        <Modal size="lg" motionPreset="slideInBottom" scrollBehavior='inside' {...props}>
            <ModalOverlay className="backdrop-blur" />
            <ModalContent
                alignSelf={['flex-end', 'center']}
                className="card"
                bottom={['-16', '20']}>
                <ModalHeader pb="0" className="text-3xl">
                    {heading}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {subHeading && <Text>{subHeading}</Text>}
                    {props.isOpen && children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
