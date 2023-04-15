import Cookies from 'js-cookie'
import axios, { AxiosRequestConfig } from 'axios'
import Globals from '../Globals'

export const API = (
	url: string,
	isAuth?: boolean,
	options?: AxiosRequestConfig
) => {
	return axios(Globals.API_URL + url, {
		...options,
		headers: {
			authorization: isAuth ? 'Bearer ' + Cookies.get('auth_token') : null,
		},
	})
}
