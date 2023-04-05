import { CommunityData } from '../../interface/community.interface';

export interface ChatState {
    community_list: CommunityData[];
}

const initialState: ChatState = {
    community_list: [],
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
