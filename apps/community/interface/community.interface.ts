import {StrapiFile} from '.';

export interface CommunityData {
    id: number;
    name: string;
    slug: string;
    uuid: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    community_logo: StrapiFile;
    thumbnail: string;
}

export interface ChannelData {
    id: number;
    name: string;
    slug: string;
    uuid: string;
}

export interface CommunityMembership {
    id: number;
    community: CommunityData;
    full_name: string;
}
