import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spinner,
} from '@chakra-ui/react';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppStore} from '../../interface';

type Props = {};

export default function AuthenticatingPopup({}: Props) {
    const {app_loading} = useSelector((state: AppStore) => state.view);


    return (
        <Modal isOpen={app_loading} onClose={() => {}} size="full">
            <ModalOverlay />
            <ModalContent rounded='none'>
                <ModalBody
                    className="card border border-slate-150 px-4 py-4 shadow-none dark:border-navy-600 sm:px-5"
                    rounded={'none'}
                    display={'flex'}
                    justifyContent="center"
                    alignItems={'center'}>
                    <Spinner />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
