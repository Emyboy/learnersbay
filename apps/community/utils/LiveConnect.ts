import Cookies from 'js-cookie';
import {setViewState} from '../redux/actions/view.action';

const {io} = require('socket.io-client');

const SERVER_URL = 'http://localhost:1337';
const socket = io(SERVER_URL, {
    auth: {
        token: Cookies.get('auth_token'),
    },
});
export default class LiveConnect {
    static initialize() {
        console.log('%c CONNECTING TO iDegin', 'color:#5e72e4');
        socket.on('connect', () => {
            console.log('%c CONNECTED TO iDEGIN', 'color: #0ee91875');
            this.connectToMessaging();
        });
    }

    static connectToMessaging() {
        socket.on('message:create', (data: any) => {
            console.log(`MESSAGE CREATED`, data);
        });
        socket.on('message:update', (data: any) => {
            console.log(`MESSAGE UPDATED`, data);
        });
        setViewState({
            app_loading: false,
        });
    }
}
