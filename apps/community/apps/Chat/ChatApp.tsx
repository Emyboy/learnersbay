import React from 'react'
import ChatAppLeft from './ChatLeft/ChatAppLeft'
import ChatBody from './ChatBody/ChatBody'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatAppRight from './ChatRight/ChatAppRight'

type Props = {}

export default function ChatApp({}: Props) {
	return (
		<>
			<ChatAppLeft />
			<main className="main-content h-100vh chat-app mt-0 flex w-full flex-col lg:mr-80">
				<ChatHeader />
				<ChatBody />
				<ChatInput />
			</main>
            <ChatAppRight />
		</>
	)
}
