import Link from "next/link";
import LinkIcon from "@/components/LinkIcon";
import { linkClasses } from "@/styles/classes";
import Spotify from "@/components/Spotify";

export default function Home() {

  const classes = [
    'p-10',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
  ];

  return (
    <div
      className={classes.join(' ')}
    >
      <h1 className="text-2xl font-bold">Next.js Route Loader Example</h1>
      <ul className="text-2xl mt-6 flex flex-col gap-4 [&>*]:flex [&>*]:items-center">
        <li>
          <Link className={linkClasses.join(' ')} href="/page1">
            <LinkIcon /> Page 1
          </Link>
        </li>
        <li>
          <Link className={linkClasses.join(' ')} href="/page2">
            <LinkIcon /> Page 2
          </Link>
        </li>
        <li>
          <Link className={linkClasses.join(' ')} href="/slow-page">
            <LinkIcon /> Slow Page
          </Link>
        </li>
      </ul>
      <Spotify
        className="max-w-2xl mt-10"
        url="https://open.spotify.com/embed/track/0szLEuo0bwvUXUivzDiip9?utm_source=generator"
      />
    </div>
  )
}
