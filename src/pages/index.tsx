import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/pages/Home.module.css'
import Header from '@/components/header'
import Welcome from '@/components/welcome'
import AboutOne from '@/components/about_one'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
      <AboutOne />
      </div>
  )
}
