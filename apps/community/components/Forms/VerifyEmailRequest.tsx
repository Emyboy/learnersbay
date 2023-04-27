import React, { useState } from 'react'
import { RxEnvelopeOpen } from 'react-icons/rx'
import { Button, Icon } from '@chakra-ui/react'
import { API } from '../../utils/API.utils';

type Props = { email: string }

export default function VerifyEmailRequest({ email }: Props) {
    const [loading, setLoading] = useState(false);


    const resentEmail = async () => {
        try {
            const res = await API(`/`, false, {
                method: 'POST',
                data: {
                    email
                }
            })
            console.log(res.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    return (
        <div className='card mt-5 rounded-lg p-5 lg:p-7'>
            <div className="scrollbar-sm relative flex max-w-lg flex-col overflow-y-auto rounded-lg bg-white px-4 py-10 text-center transition-opacity duration-300 dark:bg-navy-700 sm:px-5">

                <Icon as={RxEnvelopeOpen} className="mx-auto inline h-28 w-28 shrink-0 text-success" />

                <div className="mt-4">
                    <h2 className="text-2xl text-slate-700 dark:text-navy-100">
                        Check Your Email
                    </h2>
                    <p className="mt-2">
                        We sent an email verification link to {email}. Please check the spam section.
                    </p>
                    <Button isLoading={loading} onClick={resentEmail} className="mt-5 btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                        Resent Email
                    </Button>
                </div>
            </div>
        </div>
    )
}