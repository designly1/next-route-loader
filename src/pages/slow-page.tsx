import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import Spotify from '@/components/Spotify';

import { GetServerSideProps } from 'next'

interface SlowPageProps {
    randomString: string;
}

export default function SlowPage(props: SlowPageProps) {
    const { randomString } = props;

    return (
        <div className="w-full max-w-3xl mx-auto p-10 bg-gray-500 text-white flex flex-col gap-10">
            <h1 className="text-4xl font-bold">Slow Page</h1>
            <p>This page should have loaded sloooooooooooooooow!</p>
            <p>Rando String:{' '}
                <span className="text-yellow-400">{randomString}</span>
            </p>
            <ButtonLink href="/" fit>Go back home</ButtonLink>
            <Spotify
                className="max-w-2xl"
                url="https://open.spotify.com/embed/track/5oe7a9DhgK7383jLIfTPYo?utm_source=generator"
            />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Generate a random string 10 characters simulate long server response time
    const randomString = Math.random().toString(36).substring(2, 15);

    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));


    return {
        props: {
            randomString
        }
    }
}