import { CommunityMembership } from "./community.interface";

export interface MessageData {
    id: number;
    from: CommunityMembership,
    createdAt: string;
    updatedAt: string;
    message_text: string;
}