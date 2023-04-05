import React, { useEffect, useState } from 'react'
import { API } from '../../../utils/API.utils'
import EachConversation from './EachConversation/EachConversation'
// const qs = require('qs')
import qs from 'qs'

type Props = {}

export default function ChatAppLeftList({}: Props) {
	const [list, setList] = useState([])

	useEffect(() => {
		const query = qs.stringify(
			{
				// sort: ['title:asc'],
				// filters: {
				// 	title: {
				// 		$eq: 'hello',
				// 	},
				// },
				populate: '*',
				// fields: ['participants', 'creator'],
				pagination: {
					pageSize: 10,
					page: 1,
				},
				publicationState: 'live',
				locale: ['en'],
			},
			{
				encodeValuesOnly: true, // prettify URL
			}
		)

		console.log(query)
		;(async () => {
			try {
				const res = await API(`/conversations?${query}`, true)
				setList(res.data.data)
			} catch (error) {
				return Promise.reject(error)
			}
		})()
	}, [])

	return (
		<div className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
			{list.map((conversation, index) => {
				return <EachConversation key={`conv-${index}`} data={conversation} />
			})}
		</div>
	)
}
