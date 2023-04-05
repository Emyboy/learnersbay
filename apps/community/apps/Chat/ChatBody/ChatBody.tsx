import React from 'react'
import ChatDayCategory from './ChatDayCategory'
import IncomingChat from './EachChat/IncomingChat'
import OutGoingChat from './EachChat/OutGoingChat'

type Props = {}

export default function ChatBody({}: Props) {
  return (
		<div className="grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s] scrollbar-sm">
			<ChatDayCategory />
			<IncomingChat />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<ChatDayCategory />
			<IncomingChat />
			<IncomingChat />
			<OutGoingChat />
			<ChatDayCategory />
			<OutGoingChat />
			<OutGoingChat />
			<IncomingChat />
			<ChatDayCategory />
			<IncomingChat />
			<IncomingChat />
		</div>
	)
}