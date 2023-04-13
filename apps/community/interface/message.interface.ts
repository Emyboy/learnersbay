import {ChannelData, CommunityData, CommunityMembership} from './community.interface';

export interface MessageData {
    id: number;
    from: CommunityMembership;
    createdAt: string;
    updatedAt: string;
    uuid: string;
    message_text: string;
}

export interface PendingMessageData {
    uuid: string;
    from: CommunityMembership;
    message_text: string;
    channel: ChannelData;
    community: CommunityData;
    status: 'pending' | 'failed';
    createdAt: string;
}
