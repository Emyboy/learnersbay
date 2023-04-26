import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import Globals from '../../../Globals'

export default function EmailVerification() {
    // const router = useRouter();
    // const { verification_token } = router.query;
    // (async () => {
    //     const res = await axios(Globals.API_URL + `/member/email/verify`, {
    //         method: 'POST',
    //         data: {
    //             confirmation_token: verification_token
    //         }
    //     })
    // })()
    return (
        <div id="root" className="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
            <main className="grid w-full grow grid-cols-1 place-items-center">
                <div className="w-full max-w-[26rem] p-4 sm:px-5">

                    <div className="scrollbar-sm relative flex max-w-lg flex-col overflow-y-auto rounded-lg bg-white px-4 py-10 text-center transition-opacity duration-300 dark:bg-navy-700 sm:px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto inline h-28 w-28 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        <div className="mt-4">
                            <h2 className="text-2xl text-slate-700 dark:text-navy-100">
                                Verified Successfully
                            </h2>
                            <p className="mt-2">
                                Your email was successfully verified. Now you can login to your account.
                            </p>
                            <a href='/' className="mt-5 btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                                Go To Login
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(ctx: any) {
    const query = ctx.query;

    const res = await axios(Globals.API_URL + '/api' + `/member/email/verify`, {
        method: 'POST',
        data: {
            confirmation_token: query?.verification_token
        }
    })


    // Pass data to the page via props
    return { props: { data: res.data } }
}
