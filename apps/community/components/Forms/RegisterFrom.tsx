import { Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { API } from '../../utils/API.utils';

type Props = {}

export default function RegisterFrom({ }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if(!first_name || !last_name || !email || !password){
                return toast({ title: "All fields are required", status: 'error' })
            }
            const res = await API(`/auth/local/register`, false, {
                method: 'POST',
                data: {
                    email: email.toLowerCase().trim(),
                    password,
                    first_name: first_name.split(' ')[0].toLowerCase().trim(),
                    last_name: last_name.split(' ')[0].toLowerCase().trim(),
                }
            })
            console.log(res.data)
        } catch (error: any) {
            if (error.response.data.error.message) {
                toast({ title: error.response.data.error.message.replace('Email or Username', "Email"), status: 'error' })
            }
            console.log(error.response.data.error.message)
            return Promise.reject(error)
        }
    }


    return (
        <form onSubmit={handleSubmit} className="card mt-5 rounded-lg p-5 lg:p-7">
            <label className="block">
                <span>First Name:</span>
                <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Ex. John" type="text" required onChange={e => setFirstName(e.target.value)} />
            </label>
            <label className="block mt-3">
                <span>Last Name:</span>
                <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Ex. Doe" type="text" required onChange={e => setLastName(e.target.value)} />
            </label>
            <label className="block mt-3">
                <span>Email:</span>
                <input className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Ex. JohnDoe@mail.com" type="email" required onChange={e => setEmail(e.target.value)} />
            </label>

            <div className='mt-3'>
                <span>Password:</span>
                <label className="mt-1.5 flex -space-x-px">
                    <input className="form-input w-full rounded-l-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="* * * * * *" type="password" onChange={e => setPassword(e.target.value)} />
                    <span className="flex items-center justify-center rounded-r-lg border border-slate-300 px-3.5 font-inter dark:border-navy-450">
                        <span>@site.com</span>
                    </span>
                </label>
            </div>

            <div className="mt-4 flex items-center space-x-2">
                <input className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" type="checkbox" />
                <p className="line-clamp-1">
                    I agree with{' '}
                    <a href="#" className="ml-2 text-slate-400 hover:underline dark:text-navy-300">
                        privacy policy
                    </a>
                </p>
            </div>
            <Button type='submit' className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                Register
            </Button>
            <div className="mt-4 text-center text-xs+">
                <p className="line-clamp-1">
                    <span>Already have an account? </span>
                    <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="/">Sign In</a>
                </p>
            </div>
            {/* <div className="my-7 flex items-center space-x-3">
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
                <p className="text-tiny+ uppercase">or sign up with email</p>
                <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </div>
            <div className="flex space-x-4">
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    <img className="h-5.5 w-5.5" src="/assets/images/logos/google.svg" alt="logo" />
                    <span>Google</span>
                </button>
                <button className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                    <img className="h-5.5 w-5.5" src="/assets/images/logos/github.svg" alt="logo" />
                    <span>Github</span>
                </button>
            </div> */}
        </form>
    )
}