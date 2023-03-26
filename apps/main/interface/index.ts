import { AuthState } from "../redux/reducers/auth.reducer";
import { ViewState } from "../redux/reducers/view.reducer";
import { WalletState } from "../redux/reducers/wallet.reducer";
import { RequestState } from "./request.interface";

export interface AppStore {
    auth: AuthState,
    wallet: WalletState,
    view: ViewState,
    request: RequestState
}