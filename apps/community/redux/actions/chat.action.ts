import { API } from '../../utils/API.utils';
import store from '../store/store';


export const setChatState = (newState: any) => {
    store.dispatch({
        type: 'SET_CHAT_STATE',
        payload: newState,
    });
};

export const getMoreChat = async (channel_uuid: string | string[] | undefined) => {
    try {
        const chatList = store.getState().chat.chat_list;
        const lastChat = chatList[chatList.length - 1];
        const res = await API(`/messages/more/${channel_uuid}/${lastChat?.id}`);
        setChatState({
            chat_list: [...chatList, ...res.data]
        })
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
