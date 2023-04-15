import Cookies from 'js-cookie'
import axios, { AxiosRequestConfig } from 'axios'
import Globals from '../Globals'

export const API = (
	url: string,
	isAuth?: boolean,
	options?: AxiosRequestConfig
) => {
	console.log('CURRENT GLOBAL --', Globals)
	return axios(Globals.API_URL+ '/api' + url, {
		...options,
		headers: {
			authorization: isAuth ? 'Bearer ' + Cookies.get('auth_token') : null,
		},
	})
}
