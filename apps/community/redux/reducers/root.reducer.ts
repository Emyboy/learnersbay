import {
    combineReducers
} from 'redux';
import authReducer from './auth.reducer';
import chatReducer from './chat.reducer';
import communityReducer from './community.reducer';
import viewReducer from './view.reducer';



const rootReducer = combineReducers({
    auth: authReducer,
    view: viewReducer,
    chat: chatReducer,
    community: communityReducer
});

export default rootReducer;
