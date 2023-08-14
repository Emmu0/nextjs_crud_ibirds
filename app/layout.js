import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto'>
          <div className=''>
            <AuthProvider>
            {children}
            </AuthProvider>
            <ToastContainer />
          </div>

        </div>
      </body>
    </html>
    // </Provider>
    
  )
}
