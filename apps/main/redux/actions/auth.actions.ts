import { API } from "../../utils/API.utils";
import store from "../store/store";

export const setAuthState = (newState: any) => {
    store.dispatch({
        type: "SET_AUTH_STATE",
        payload: newState
    });
};



export const logout = async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("dependencies");
    store.dispatch({
        type: "SET_AUTH_STATE",
        payload: {
            user: null,
            user_info: null
        }
    });
};
