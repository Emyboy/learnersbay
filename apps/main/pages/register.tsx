import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import SignupForm from '../components/Auth/SignupForm'

export default function Signup() {
	return (
		<MainLayout>
			<section className="form-page mt-50">
				<div className="form-page__img bg-dark-1">
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
							<div className="col-xl-8 col-lg-9">
								<SignupForm />
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	)
}
