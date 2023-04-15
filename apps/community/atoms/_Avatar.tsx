import { Avatar, AvatarBadge, AvatarProps } from '@chakra-ui/react';
import React from 'react'
import { CommunityMembership } from '../interface/community.interface';

type Props = {
    membership: CommunityMembership;
    showBadge?: boolean;
}

export default function _Avatar(props: Props & AvatarProps) {
    return (
        <Avatar bg='theme' src={props.membership.avatar_url} {...props}>
            {props.showBadge && <AvatarBadge boxSize="1em" bg="green.500" />}
        </Avatar>
    );
}