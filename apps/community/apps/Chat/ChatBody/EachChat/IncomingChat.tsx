import React from 'react'

type Props = {
	message: any
}

export default function IncomingChat({message}: Props) {
	return (
		<div className="flex items-start space-x-2.5 sm:space-x-5">
			<div className="avatar">
				<img
					className="rounded-full"
					src="/assets/images/avatar/avatar-19.jpg"
					alt="avatar"
				/>
			</div>

			<div className="flex flex-col items-start space-y-3.5">
				<div className="mr-4 max-w-lg sm:mr-10">
					<div className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100">
						{message?.message_text}
					</div>
					<p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
						08:16
					</p>
				</div>
			</div>
		</div>
	)
}
