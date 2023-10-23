import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initFirabaseApp } from '@/lib/firebase/firebase'
import { getApp } from 'firebase/app'

initFirabaseApp()

export default function App({ Component, pageProps }: AppProps) {
  console.log(getApp());

  return <Component {...pageProps} />
}
