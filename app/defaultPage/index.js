"use client"
import React, { useEffect } from 'react'
import Footer from './Footer'
import LogIn from '@/components/Forms/LogIn';
import Signup from '@/components/Forms/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { googleAuthenticate } from '@/redux/action/api';

const index = ({form,pageHandler}) => {
  const dispatch = useDispatch();
  const session = useSession();

  useEffect(() => {
    if (session?.data?.user) {
      const formdata = {
        name: session?.data?.user?.name,
        email: session?.data?.user?.email
      }
      dispatch(googleAuthenticate(formdata))
    }
  }, [session?.data?.user])
  return (
    <div>
      
      <> <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Welcome to Our Landing Page</h1>
          <p className="lead">A simple and elegant landing page template built with Bootstrap in Next.js.</p>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          {/* Features section content */}
        </div>
      </section></>
      {form == "Login" && <LogIn pageHandler={pageHandler}/>}
      {form == "Signup" && <Signup pageHandler={pageHandler}/>}

     
      <Footer/>
    </div>
  )
}

export default index
