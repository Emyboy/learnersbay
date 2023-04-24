import React from 'react'
import RegisterFrom from '../../components/Forms/RegisterFrom'

export default function register() {
    return (
        <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <main className="grid w-full grow grid-cols-1 place-items-center">
                <div className="w-full max-w-[26rem] p-4 sm:px-5">
                    <div className="text-center">
                        <img className="mx-auto h-16 w-16" src="/assets/images/app-logo.svg" alt="logo" />
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                                Welcome To Lineone
                            </h2>
                            <p className="text-slate-400 dark:text-navy-300">
                                Please sign up to continue
                            </p>
                        </div>
                    </div>
                    <RegisterFrom />
                </div>
            </main>
        </div>
    )
}
