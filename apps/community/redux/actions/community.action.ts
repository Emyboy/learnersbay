import store from "../store/store"

export const setCommunityState = (newState:any) => {
    store.dispatch({
        type: 'SET_COMMUNITY_STATE',
        payload: newState
    })
}