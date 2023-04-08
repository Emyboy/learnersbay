import {API} from '../../utils/API.utils';
import store from '../store/store';
import LiveConnect from '../../utils/LiveConnect';
import {setViewState} from './view.action';
import Cookies from 'js-cookie';
import {setCommunityState} from './community.action';

export const setAuthState = (newState: any) => {
    store.dispatch({
        type: 'SET_AUTH_STATE',
        payload: newState,
    });
};

export const getAuthDependencies = async () => {
    if (Cookies.get('auth_token')) {
        try {
            setViewState({
                app_loading: true,
            });
            const me = await API(`/users/me`, true);
            setAuthState({
                user: me.data,
            });
            LiveConnect.initialize();
            const dependencies: any = await API(`/member/dependencies`, true);
            setCommunityState({
                community_list: dependencies.data.communities,
                community_memberships: dependencies.data.memberships,
            });
        } catch (error) {
            // todo - logout if unauthorized
            setTimeout(() => {
                getAuthDependencies();
            }, 5000);
            return Promise.reject(error);
        }
    }
};

export const logout = async () => {
    localStorage.clear();
    Cookies.remove('auth_token')
    window.location.reload();
};
