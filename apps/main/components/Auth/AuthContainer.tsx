import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
	children: React.ReactElement
}

export default function AuthContainer({ children }: Props) {
	return (
		<section className="form-page ">
			<div className="form-page__img bg-dark-1" style={{ paddingTop: '30vh' }}>
				<div className="form-page-composition">
					<div className="-bg">
						<img
							data-move="30"
							className="js-mouse-move"
							src="/assets/img/login/bg.png"
							alt="bg"
						/>
					</div>
					<div className="-el-1">
						<img
							data-move="20"
							className="js-mouse-move"
							src="/assets/img/home-9/hero/bg.png"
							alt="image"
						/>
					</div>
					<div className="-el-2">
						<img
							data-move="40"
							className="js-mouse-move"
							src="/assets/img/home-9/hero/1.png"
							alt="icon"
						/>
					</div>
					<div className="-el-3">
						<img
							data-move="40"
							className="js-mouse-move"
							src="/assets/img/home-9/hero/2.png"
							alt="icon"
						/>
					</div>
					<div className="-el-4">
						<img
							data-move="40"
							className="js-mouse-move"
							src="/assets/img/home-9/hero/3.png"
							alt="icon"
						/>
					</div>
				</div>
			</div>

			<div
				className="form-page__content lg:py-50"
				style={{ backgroundColor: '#F7E9E7' }}
			>
				<div className="container">
					<div className="row justify-center items-center">
						<Box className="col-xl-8 col-lg-9 d-flex justify-center">
							<Box
								w={['100%', '550px']}
								className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16"
							>
								{children}
							</Box>
						</Box>
					</div>
				</div>
			</div>
		</section>
	)
}
