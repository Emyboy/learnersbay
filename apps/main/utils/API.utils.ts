import Cookies from 'js-cookie'
import axios, { AxiosRequestConfig } from 'axios'

export const API = (
	url: string,
	isAuth?: boolean,
	options?: AxiosRequestConfig
) => {
	return axios(process.env.NEXT_PUBLIC_API_URL + url, {
		...options,
		headers: {
			authorization: isAuth ? 'Bearer ' + Cookies.get('auth_token') : null,
		},
	})
}
