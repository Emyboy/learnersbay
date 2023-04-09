import {
    CommunityData,
    CommunityMembership,
} from '../interface/community.interface';
import store from '../redux/store/store';

export const getCommunityMembership = (community_uuid: string) => {
    const memberships: CommunityMembership[] =
        store.getState().community.community_memberships;
    return memberships.filter(x => x.community.uuid === community_uuid)[0];
};

export const getCommunityByUUID = (community_uuid: string) => {
    const communities: CommunityData[] =
        store.getState().community.community_list;
    return communities.filter(x => x.uuid === community_uuid)[0];
};

export const stringToSlug = (string: string): string => {
    return string.replace(/\s/g, '-');
};
