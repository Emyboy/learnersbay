import Cookies from 'js-cookie';
import Globals from '../Globals';
import {setViewState} from '../redux/actions/view.action';

const {io} = require('socket.io-client');

const SERVER_URL = Globals.API_URL;
export const socket = io(SERVER_URL, {
    auth: {
        token: Cookies.get('auth_token'),
    },
});
export default class LiveConnect {
    static initialize() {
        console.log('%c CONNECTING TO iDegin', 'color:#5e72e4');
        socket.on('connect', () => {
            console.log('%c CONNECTED TO iDegin', 'color: #0ee91875');
            setViewState({
                app_loading: false,
                connected: true,
            });
        });
        socket.on('disconnect', () => {
            console.log('%c DISCONNECTED FROM iDegin', 'color:red');
            setViewState({
                app_loading: true,
                connected: false,
            });
        });
    }

    static connectToMessaging() {
        setViewState({
            app_loading: false,
            connected: true,
        });
    }
}
