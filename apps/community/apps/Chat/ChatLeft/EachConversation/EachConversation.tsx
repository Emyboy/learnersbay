import Link from 'next/link'
import React from 'react'
import { ConversationData } from '../../../../interface/chat.interface'

type Props = {
	data: ConversationData
}

export default function EachConversation({ data }: Props) {
	return (
		<Link
			href={`/`}
			className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
		>
			<div className="avatar h-10 w-10">
				<img
					className="rounded-full"
					src="/assets/images/avatar/avatar-19.jpg"
					alt="avatar"
				/>
				<div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
			</div>
			<div className="flex flex-1 flex-col">
				<div className="flex items-baseline justify-between space-x-1.5">
					<p className="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
						Alfredo Elliott
					</p>
					<span className="text-tiny+ text-slate-400 dark:text-navy-300">
						11:03
					</span>
				</div>
				<div className="mt-1 flex items-center justify-between space-x-1">
					<p className="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300">
						😂 Lorem ipsum dolor
					</p>
					<div className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white">
						5
					</div>
				</div>
			</div>
		</Link>
	)
}
