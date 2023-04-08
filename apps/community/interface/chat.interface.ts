import { User } from "./auth.interface";
import { CommunityMembership } from "./community.interface";

export interface ChatData {
    id: number;
    message_text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    from: User,
    conversation: ConversationData;
}

export interface ConversationData {
    id: number;
    participants: CommunityMembership[];
    uuid: string;
    updatedAt: string;
    createdAt: string;
} 