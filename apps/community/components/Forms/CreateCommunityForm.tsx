import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Globals from '../../Globals';
import { AppStore } from '../../interface';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, Center, Icon, useToast, VStack } from '@chakra-ui/react';
import { stringToSlug } from '../../utils/Community.utils'
import { API } from '../../utils/API.utils';
import imageCompression from 'browser-image-compression';
import Resizer from "react-image-file-resizer";
import { useRouter } from 'next/router';
import classNames from 'classnames';
const qs = require('qs');


type Props = {};

export default function CreateCommunityForm({ }: Props) {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState<any>('')
    const { user } = useSelector((state: AppStore) => state.auth);
    const toast = useToast();
    const router = useRouter()

    const [subdomainError, setSubdomainError] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user && slug && name && slug?.length > 1) {
            if (!thumbnail) {
                return toast({ title: "Please an a logo", status: 'error' })
            }
            const query = qs.stringify({
                filters: {
                    slug: {
                        $eq: slug,
                    },
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            const subdomain = await API(`/communities?${query}`)
            const subdomainExist = subdomain.data.data.length > 0;
            if (!subdomainExist) {
                try {
                    setLoading(true)
                    const _data = {
                        name,
                        slug,
                        uuid: uuidv4(),
                        owner: user.id,
                        description,
                        thumbnail
                    };
                    const res = await API(`/communities`, true, {
                        method: 'POST',
                        data: _data
                    })
                    // router.push(`/chat/community/${res.data.uuid}`)
                    const theLocation: any = `/chat/community/${res.data.uuid}`
                    window.location = theLocation;
                } catch (error) {
                    setLoading(false)
                    toast({ title: `Error, please try again`, status: 'error' })
                    return Promise.reject(error);
                }
            } else {
                setSubdomainError(true)
                return toast({ title: `Subdomain is taken`, description: `the subdomain ${slug} is already taken`, status: 'error' })
            }
        }
    };

    useEffect(() => {
        if (name && name.length < 25) {
            setSlug(stringToSlug(name)?.replaceAll('-', '')?.replace(/[^a-zA-Z ]/g, "").trim())
            setSubdomainError(false)
        }
    }, [name])
    useEffect(() => {
        if (slug && slug.length < 25) {
            setSlug(stringToSlug(slug)?.replaceAll('-', '')?.replace(/[^a-zA-Z ]/g, "").trim())
            setSubdomainError(false)
        }
    }, [slug])

    return (
        <form onSubmit={handleSubmit} className="mt-10 mb-20">
            <LogoSelect handleSubmit={(e: any) => setThumbnail(e)} />
            <div>
                <span>Community Name:</span>
                <label className="mt-1.5 flex -space-x-px">
                    <input
                        maxLength={35}
                        required
                        className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        placeholder="Community Name"
                        type="text"
                        autoFocus
                        name='community-name'
                        onChange={e => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="mt-4">
                <span>Subdomain:</span>
                <label className="mt-1 flex -space-x-px">
                    <input
                        maxLength={20}
                        value={slug}
                        required
                        className={classNames({ "border-error border": subdomainError }, { "border border-slate-300 focus:border-primary dark:border-navy-450 hover:border-slate-400 dark:hover:border-navy-400 dark:focus:border-accent": !subdomainError }, " rounded-l-lg form-input w-full  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10  focus:z-10   ")}
                        disabled={!name}
                        type="text"
                        onChange={e => setSlug(e.target.value)}
                        name='community-subdomain'
                    />
                    <span className="flex items-center justify-center rounded-r-lg border border-slate-300 bg-slate-150 px-3.5 font-inter text-slate-800 dark:border-navy-450 dark:bg-navy-500 dark:text-navy-100">
                        <span>.{Globals.WEBSITE_NAME.toLowerCase()}.com</span>
                    </span>
                </label>
            </div>
            <div className="mt-4">
                <span>Description: {`(${description?.length}/150)`}</span>
                <label className="mt-1 flex -space-x-px">
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        maxLength={140}
                        rows={4}
                        placeholder="Tell us about this community"
                        className="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" name='community-description'></textarea>
                </label>
            </div>
            <Button
                isLoading={loading}
                mb="5"
                type='submit'
                className="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                Create
            </Button>
        </form>
    );
}

const LogoSelect = ({ handleSubmit }: { handleSubmit: any }) => {
    const toast = useToast();

    const [imageUrl, setImageUrl] = useState<any>(null);

    const resizeFile = (
        file: any,
        width: number,
        height: number,
        quality: number,
    ) => {
        return new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                width,
                height,
                "JPEG",
                quality,
                0,
                (uri: unknown) => {
                    resolve(uri);
                },
                "blob",
                width,
                height,
            );
        });
    };

    const processBlob = (blob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            setImageUrl(reader.result);
            handleSubmit(reader.result);
        };
    };

    const handleFileSelect = async (e: any) => {
        const theFile = e.target.files[0];
        if (theFile) {
            try {
                const output = await resizeFile(theFile, 300, 300, 100);
                processBlob(output);
                return output;
            } catch (error) {
                toast({ title: `Compression Error, please try again` })
                return Promise.reject(error);
            }
        }
    }

    return <Center mb="9">
        <VStack>
            {imageUrl && <div className='rounded' style={{ width: '100px', height: '100px', backgroundImage: `url(${imageUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />}
            <label className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                <input tabIndex={-1} type="file" className="pointer-events-none absolute inset-0 h-full w-full opacity-0" onChange={handleFileSelect} accept="image/*" />
                <span className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                    </svg>
                    <span>Choose File</span>

                </span>
            </label>
            <span>Community Logo:</span>
            <small>300 x 300</small>
        </VStack>
    </Center>
}
