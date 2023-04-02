import React from 'react'
import IncomingChat from './EachChat/IncomingChat'
import OutGoingChat from './EachChat/OutGoingChat'

type Props = {}

export default function ChatBody({}: Props) {
  return (
		<div className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm">
			<IncomingChat />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<IncomingChat />
			<IncomingChat />
		</div>
	)
}