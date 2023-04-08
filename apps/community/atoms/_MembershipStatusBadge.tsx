import React from 'react';
import classNames from 'classnames';
import {CommunityMembership} from '../interface/community.interface';

type Props = {
    membership: CommunityMembership;
};

export default function _MembershipStatusBadge({membership}: Props) {
    if (!membership) {
        return null;
    }

    return (
        <div
            className={classNames(
                'badge space-x-2.5 rounded-full ',
                {
                    'bg-error/10 text-error dark:bg-error/15':
                        membership.membership_status === 'suspended',
                },
                {
                    'bg-success/10 text-success dark:bg-success/15':
                        membership.membership_status === 'subscribed',
                },
                {
                    'text-slate-800 dark:text-navy-100':
                        membership.membership_status === 'unsubscribed',
                },
            )}>
            <div className="h-2 w-2 rounded-full bg-current"></div>
            <span>{membership.membership_status}</span>
        </div>
    );
}
