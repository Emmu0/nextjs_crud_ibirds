import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <div>
            <div className='mb-3'>
                <Navbar />
            </div>
            {children}
        </div>
    </div>
  )
}

export default layout
