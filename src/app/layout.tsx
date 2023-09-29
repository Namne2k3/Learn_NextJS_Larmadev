import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })
// metadata là tên của trang web trên thanh tab trình duyệt
export const metadata: Metadata = {
  title: 'Next Page',
  description: 'This is my Next Page',
}

export default function RootLayout({ children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
