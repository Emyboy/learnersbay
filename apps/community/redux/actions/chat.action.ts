import store from '../store/store';
import {v4 as uuidv4} from 'uuid';
import {
    MessageData,
    PendingMessageData,
} from '../../interface/message.interface';
import {getCommunityMembership} from './community.action';
import {getCommunityByUUID} from '../../utils/Community.utils';
import {API} from '../../utils/API.utils';

export const setChatState = (newState: any) => {
    store.dispatch({
        type: 'SET_CHAT_STATE',
        payload: newState,
    });
};

export const sendMessage = (message_text: string, community_uuid: string) => {
    const communityMembership = getCommunityMembership(`${community_uuid}`);
    const activeChannel = store.getState().community.active_channel;
    const data: PendingMessageData = {
        uuid: uuidv4() + Date.now(),
        status: 'pending',
        message_text,
        from: communityMembership,
        channel: activeChannel,
        community: getCommunityByUUID(community_uuid),
        createdAt: new Date().toISOString(),
    };
    const allMsg = store.getState().chat.channel_messages;
    setChatState({
        channel_messages: [...allMsg, data],
    });
};

export const formatMessage = (_message_list: any[]) => {
    let output: any = {};
    _message_list.forEach((message: MessageData) => {
        const dayCategory = message.createdAt.split('T')[0];
        output = {...output, [dayCategory]: []};
    });
    _message_list.forEach((message: MessageData) => {
        const dayCategory = message.createdAt.split('T')[0];
        output[dayCategory].push(message);
    });
    return output;
};

const findMoreMessages = async (
    channel_uuid: string,
    last_message_id: number,
) => {
    if (channel_uuid && last_message_id) {
        // todo - fix this api call (lastChat.id is undefined)
        try {
            const res = await API(
                `/messages/more/${channel_uuid}/${last_message_id}`,
            );
            return res.data;
        } catch (error) {
            setTimeout(() => {
                findMoreMessages(channel_uuid, last_message_id);
            }, 3000);
            return Promise.reject(error);
        }
    }
};
