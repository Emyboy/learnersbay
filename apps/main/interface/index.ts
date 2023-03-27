import { AuthState } from "../redux/reducers/auth.reducer";

export interface AppStore {
    auth: AuthState,
}