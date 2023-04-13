import { ChatData } from '../../interface/chat.interface'
import { MessageData, PendingMessageData } from '../../interface/message.interface';

export interface ChatState {
    // chat_list: ChatData[],
    channel_messages: MessageData[] & PendingMessageData[];
}

const initialState: ChatState = {
    // chat_list: [],
    channel_messages: [],
};

export default (
	state = initialState,
	{ type, payload }: { type: string; payload: any }
) => {
	switch (type) {
		case 'SET_CHAT_STATE':
			return { ...state, ...payload }

		default:
			return state
	}
}
