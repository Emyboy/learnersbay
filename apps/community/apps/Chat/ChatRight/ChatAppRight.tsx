import React from 'react'
import ChatAppRightHeader from './ChatAppRightHeader'

type Props = {}

export default function ChatAppRight({}: Props) {
  return (
		<div className="fixed right-0 top-0 z-[101] h-full w-full sm:w-80">
			<div className='flex h-full w-full flex-col border-l border-slate-150 bg-white transition-transform duration-200 dark:border-navy-600 dark:bg-navy-750'>
                <ChatAppRightHeader />
            </div>
		</div>
	)
}