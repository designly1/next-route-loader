import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RouteLoader from '@/components/RouteLoader'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const classes = [inter.className, 'min-h-screen'];

  return <main className={classes.join(' ')}>
    <RouteLoader />
    <Header />
    <div className="flex flex-col">
      <Component {...pageProps} />
    </div>
  </main>
}
