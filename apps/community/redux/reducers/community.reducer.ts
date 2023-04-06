import { CommunityData, CommunityMembership } from '../../interface/community.interface';

export interface CommunityState {
    community_list: CommunityData[];
    community_memberships: CommunityMembership[];
}

const initialState: CommunityState = {
    community_list: [],
    community_memberships: []
};

export default (
    state = initialState,
    {type, payload}: {type: string; payload: any},
) => {
    switch (type) {
        case 'SET_COMMUNITY_STATE':
            return {...state, ...payload};

        default:
            return state;
    }
};
