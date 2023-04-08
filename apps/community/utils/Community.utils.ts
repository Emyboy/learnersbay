import { CommunityMembership } from "../interface/community.interface";
import store from "../redux/store/store"

export const getCommunityMembership = (community_uuid: string) => {
    const memberships: CommunityMembership[] = store.getState().community.community_memberships;
    return memberships.filter(x => x.community.uuid === community_uuid)[0]
}