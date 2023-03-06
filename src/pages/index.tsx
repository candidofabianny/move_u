import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/pages/Home.module.css'
import Header from '@/components/header'
import Welcome from '@/components/welcome'
import Banner from '@/components/banner'
import About from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Banner />
      <About />
      </div>
  )
}
