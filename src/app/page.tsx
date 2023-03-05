import { Inter } from 'next/font/google'
import { MainPage } from '../pages/main/MainPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <MainPage />
}
