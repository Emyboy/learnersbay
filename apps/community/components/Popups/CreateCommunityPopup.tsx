import {ModalProps} from '@chakra-ui/react';
import React from 'react';
import _Modal from '../../atoms/_Modal';
import CreateCommunityForm from '../Forms/CreateCommunityForm';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CreateCommunityPopup(props: Props) {
    return (
        <_Modal
            {...props}
            heading="Create A Community"
            subHeading="Create a community and invite other members">
            <CreateCommunityForm />
        </_Modal>
    );
}
