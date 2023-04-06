import { ChatData } from '../../interface/chat.interface'

export interface ChatState {
	// chat_list: ChatData[],
	incoming_message_id: number | null
}

const initialState: ChatState = {
	// chat_list: [],
	incoming_message_id: null
}

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
