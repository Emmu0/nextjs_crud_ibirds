import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import MainNavbar from '@/components/mainNavbar/mainNavbar'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '@/redux/reducers'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
    // <Provider store={store}>
      <html lang="en">
      <body className={inter.className}>
        {/* <MainNavbar /> */}
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
