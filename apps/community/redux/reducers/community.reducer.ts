import { ChannelData, CommunityData, CommunityMembership } from '../../interface/community.interface';

export interface CommunityState {
    community_list: CommunityData[];
    community_memberships: CommunityMembership[];
    selected_communities: CommunityData[];
    active_channel: ChannelData | null;
}

const initialState: CommunityState = {
    community_list: [],
    selected_communities: [],
    community_memberships: [],
    active_channel: null
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
