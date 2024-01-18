import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[poppins.className, "bg-[var(--white)] p-2"].join(" ")}>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
