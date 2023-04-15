import { User } from "../../interface/auth.interface";

export interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null,
};

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case "SET_AUTH_STATE":
            return { ...state, ...payload };

        default:
            return state;
    }
};
