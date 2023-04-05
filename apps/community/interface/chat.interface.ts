import { User } from "./auth.interface";

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
    participants: User[];
} 