
import React from 'react'
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const cookieSetter = (res,token,set) => {
  console.log("coockie setter 1",res);
  console.log("coockie setter ##1",token,set);
  console.log("coockie setter ##2",set);
    res.setHeader("setcookie",serialize('token', set ? token : '', {
      path:"/", 
       maxAge:set ? 60 * 60 * 24 * 7 : 0, // 1 week
       httpOnly:true
     }))
  }


const getToken =(id)=>{
  console.log(jwt.sign({id},process.env.jwt_key),'jwt.sign({id},process.env.jwt_key)');
    return jwt.sign({id},process.env.jwt_key)
}

export {cookieSetter,getToken}
