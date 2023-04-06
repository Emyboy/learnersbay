import store from '../store/store';

export const setChatState = (newState: any) => {
    store.dispatch({
        type: 'SET_CHAT_STATE',
        payload: newState,
    });
};
