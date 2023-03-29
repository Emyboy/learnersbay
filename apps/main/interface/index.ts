import { AuthState } from "../redux/reducers/auth.reducer";
import { ViewState } from "../redux/reducers/view.reducer";

export interface AppStore {
    auth: AuthState,
    view: ViewState,
}