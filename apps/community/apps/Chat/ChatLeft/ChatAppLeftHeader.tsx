import { useRouter } from 'next/router';
import React from 'react'
import { getCommunityByUUID } from '../../../utils/Community.utils';

type Props = {}

export default function ChatAppLeftHeader({}: Props) {
	const router = useRouter()
	const { community_uuid } = router.query;

	const activeCommunity = getCommunityByUUID(String(community_uuid));

  return (
		<div className="flex items-center">
			<div className="avatar mr-3 hidden h-9 w-9 lg:flex">
				<div className="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
						></path>
					</svg>
				</div>
			</div>
			<p className="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100">
				{activeCommunity?.name}
			</p>
		</div>
	)
}