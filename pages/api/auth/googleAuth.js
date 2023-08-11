import connectDB from '@/config/database';
import errorHandler from '@/midleware/error';
import userSchema from "@/ApiSchema/user";
import bcrypt from 'bcrypt';
import React from 'react'
import { getToken } from 'next-auth/jwt';

const handle =async (req, res) => {
    console.log('heloo !! @@');

    if (req.method == "POST") {

        const { name, email } = req.body;
        console.log(name, email,'name, email');
        if (!name && !email) return errorHandler(res, 400, "Failed Authication !");

        const ragexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!ragexEmail.test(email)) {return errorHandler(res, 400, "Enter valid Email address !");}

        await connectDB();
        let user = await userSchema.findOne({email})
        if(user){
            return errorHandler(res, 400, "user Already exist.");
        }else{
            bcrypt
            const encryptedPassword = await bcrypt.hash(email, 10);

            await userSchema.create({
                name,
                email,
                password : encryptedPassword
            })
            console.log(user,'encryptedPassword 1');

            // const token = getToken(user._id)
            // cookieSetter(res, token, true)
            // console.log(token,encryptedPassword,user,'encryptedPassword 2');
        }


    }
}

export default handle
