import styles from '@/pages/Home.module.scss'
import type { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
