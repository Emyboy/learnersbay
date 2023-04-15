import {Box, Button, Flex, Text, useToast} from '@chakra-ui/react';
import _Modal from '../../atoms/_Modal';

import React, {useState} from 'react';
import {API} from '../../utils/API.utils';
import {useRouter} from 'next/router';
import {
    getCommunityByUUID,
    getCommunityMembership,
    stringToSlug,
} from '../../utils/Community.utils';
import {v4 as uuidv4} from 'uuid';

type Props = {
    show: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
};

export default function CreateChannelPopup({onClose, show, onSubmit}: Props) {
    const [channelName, setChannelName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const {community_uuid} = router.query;
    const theCommunity = getCommunityByUUID(String(community_uuid));
    const theMembership = getCommunityMembership(String(community_uuid));
    const toast = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            const data = {
                name: stringToSlug(channelName),
                uuid: uuidv4() + Date.now(),
                community: theCommunity.id,
                description,
                creator: theMembership.id,
                publishedAt: new Date(),
            };
            const res = await API(`/channels`, true, {
                method: 'POST',
                data: {
                    data,
                },
            });
            onSubmit(res.data);
            router.push(`/chat/community/${community_uuid}/${res.data.uuid}`);
            onClose();
            toast({
                title: 'Channel created',
                status: 'success',
                duration: 9000,
                position: 'top',
            });
            reset();
        } catch (error) {
            // todo - handle error
            setLoading(false);
            return Promise.reject(error);
        }
    };

    const reset = () => {
        setChannelName('');
        setDescription('');
        setLoading(false);
    };

    return (
        <_Modal
            subHeading="Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example."
            heading="Create a channel"
            isOpen={show}
            onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <Box my="5">
                    <label className="block pb-4">
                        <span>
                            Channel name{' '}
                            <Text as="span" fontWeight={'thin'}>{`(${40 - channelName.length})`}</Text>
                        </span>
                        <span className="relative mt-1.5 flex">
                            <input
                                maxLength={40}
                                value={stringToSlug(channelName)}
                                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Ex. Marketing"
                                type="text"
                                autoFocus
                                required
                                onChange={e => setChannelName(e.target.value)}
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                #
                            </span>
                        </span>
                    </label>
                    <label className="block pb-4">
                        <span>Description {`(Optional)`}</span>
                        <span className="relative mt-1.5 flex">
                            <textarea
                                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                placeholder="Ex. This channel is for the marketing team"
                                rows={1}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                ?
                            </span>
                        </span>
                        <Text
                            fontWeight={
                                'thin'
                            }>{`What's your channel all about?`}</Text>
                    </label>
                    <Flex justifyContent={'flex-end'}>
                        <Button
                            disabled={!channelName}
                            isLoading={loading}
                            type='submit'
                            className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                            Create
                        </Button>
                    </Flex>
                </Box>
            </form>
        </_Modal>
    );
}
