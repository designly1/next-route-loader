import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import Spotify from '@/components/Spotify'

export default function Page2() {
    return (
        <div className="w-full max-w-3xl mx-auto p-10 bg-gray-500 text-white flex flex-col gap-10">
            <h1 className="text-4xl font-bold">Page 2</h1>
            <p>Yup, you guessed it! Another page! Woohoo!</p>
            <ButtonLink href="/" fit>Go back home</ButtonLink>
            <Spotify
                className="max-w-2xl"
                url="https://open.spotify.com/embed/track/7wrV7KyFXBEqXKK8JB261z?utm_source=generator"
            />
        </div>
    )
}
