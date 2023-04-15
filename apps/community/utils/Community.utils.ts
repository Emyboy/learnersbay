import {
    ChannelData,
    CommunityData,
    CommunityMembership,
} from '../interface/community.interface';
import store from '../redux/store/store';

export const getCommunityMembership = (community_uuid: string):CommunityMembership => {
    const memberships: CommunityMembership[] =
        store.getState().community.community_memberships;
    return memberships.filter(x => x.community.uuid === community_uuid)[0];
};

export const getCommunityByUUID = (community_uuid: string):CommunityData => {
    const communities: CommunityData[] =
        store.getState().community.community_list;
    return communities.filter(x => x.uuid === community_uuid)[0];
};

export const stringToSlug = (string: string): string => {
    let theStr =  string.replace(/\s/g, '-').replaceAll(/--/g, '-').toLowerCase();
    return theStr;
};


