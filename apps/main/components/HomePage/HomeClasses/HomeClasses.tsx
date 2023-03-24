import React from 'react'
import Tabs from '../../Tabs/Tabs'
import EachHomeClass from './EachHomeClass'

export default function HomeClasses() {
  return (
		<section className="layout-pt-md layout-pb-lg">
			<div className="container tabs -pills-2 js-tabs animated">
				<div className="row y-gap-20 justify-between items-end">
					<div className="col-auto">
						<div className="sectionTitle ">
							<h2 className="sectionTitle__title ">Explore Featured Courses</h2>

							<p className="sectionTitle__text ">
								10,000+ unique online course list designs
							</p>
						</div>
					</div>

					<div className="col-auto">
						<Tabs />
					</div>
				</div>
                <div className='tabs__content pt-60 lg:pt-40 js-tabs-content'>
                    <div className='tabs__pane -tab-item-1 is-active'>
                        <div className='row y-gap-30 justify-center'>
                            <EachHomeClass />
                            <EachHomeClass />
                            <EachHomeClass />
                            <EachHomeClass />
                            <EachHomeClass />
                            <EachHomeClass />
                        </div>
                    </div>
                </div>
			</div>
		</section>
	)
}
