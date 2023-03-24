import React from 'react'

type Props = {}

export default function Tabs({}: Props) {
  return (
		<div className="tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls">
			<div className="col-auto">
				<button
					className="tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button is-active"
					data-tab-target=".-tab-item-1"
					type="button"
				>
					All Categories
				</button>
			</div>

			<div className="col-auto">
				<button
					className="tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button"
					data-tab-target=".-tab-item-2"
					type="button"
				>
					Design
				</button>
			</div>

			<div className="col-auto">
				<button
					className="tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button"
					data-tab-target=".-tab-item-3"
					type="button"
				>
					Development
				</button>
			</div>

			<div className="col-auto">
				<button
					className="tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button"
					data-tab-target=".-tab-item-4"
					type="button"
				>
					Animation
				</button>
			</div>
		</div>
	)
}