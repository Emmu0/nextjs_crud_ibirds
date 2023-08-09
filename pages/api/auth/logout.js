import { cookieSetter } from '@/midleware';
import errorHandler from '@/midleware/error';
import React from 'react'

const logout = async (req, res) => {
    if (req.method !== 'GET') {
      return errorHandler(res, 404, 'only GET api Method is allowed');
    }
  
    // Reset the token cookie by passing null and false
    cookieSetter(res, null, false);
  
    res.status(200).json({ success: true, message: 'Logout successfully !' });
  };

export default logout;
