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
}

export interface ChannelData {
    id: number;
    name: string;
    slug: string;
    uuid: string;
}
