import React, { useEffect, useState } from 'react'
import EachConversation from './EachConversation/EachConversation'
// const qs = require('qs')

type Props = {}

export default function ChatAppLeftList({}: Props) {
	const [list, setList] = useState([])

	return (
		<div className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
			{list.map((conversation, index) => {
				return <EachConversation key={`conv-${index}`} data={conversation} />
			})}
		</div>
	)
}
