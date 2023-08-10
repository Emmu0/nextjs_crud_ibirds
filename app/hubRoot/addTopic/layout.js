import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <div className='mb-3'>
                <Navbar />
            </div>
            {children}
        </div>
    )
}

export default layout