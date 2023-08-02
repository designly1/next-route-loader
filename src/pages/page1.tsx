import React from 'react'
import ButtonLink from '@/components/ButtonLink'
import Spotify from '@/components/Spotify'

export default function Page1() {
    return (
        <div className="w-full max-w-3xl mx-auto p-10 bg-slate-500 text-white flex flex-col gap-10">
            <h1 className="text-4xl font-bold">Page 1</h1>
            <p>This is page one! Hopefully you were entertained by a nice loader.</p>
            <ButtonLink href="/" fit>Go back home</ButtonLink>
            <Spotify
                className="max-w-2xl"
                url="https://open.spotify.com/embed/track/7zgvrpNf0XTvoj5gcEmsyu?utm_source=generator"
            />
        </div>
    )
}
