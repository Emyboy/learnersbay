import { AuthState } from "../redux/reducers/auth.reducer";
import { ChatState } from "../redux/reducers/chat.reducer";
import { CommunityState } from "../redux/reducers/community.reducer";
import { ViewState } from "../redux/reducers/view.reducer";

export interface AppStore {
    auth: AuthState,
    view: ViewState,
    community: CommunityState,
    chat: ChatState
}