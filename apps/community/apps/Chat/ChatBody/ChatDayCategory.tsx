import React from 'react'

type Props = {}

export default function ChatDayCategory({}: Props) {
	return (
		<div className="mx-4 flex items-center space-x-3">
			<div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
			<p>Monday</p>
			<div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
		</div>
	)
}
