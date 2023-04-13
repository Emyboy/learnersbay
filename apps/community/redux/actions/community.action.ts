import {CommunityMembership} from '../../interface/community.interface';
import store from '../store/store';

export const setCommunityState = (newState: any) => {
    store.dispatch({
        type: 'SET_COMMUNITY_STATE',
        payload: newState,
    });
};

export const getCommunityMembership = (
    community_uuid: string,
): CommunityMembership => {
    const allMemberships = store.getState().community.community_memberships;
    return allMemberships.filter(
        (x: CommunityMembership) => x.community.uuid === community_uuid,
    )[0];
};
