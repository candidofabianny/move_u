import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/pages/Home.module.css'
import Styles from '@/components/welcome/welcome.module.scss';
import Header from '@/components/header'
import Welcome from '@/components/welcome'
import First_page from '@/components/first_page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <First_page />
      <Header />
      <Welcome />
      </div>
  )
}
