"use client"
import React from 'react'
import Footer from './Footer'
import LogIn from '@/components/Forms/LogIn';
import Signup from '@/components/Forms/Signup';

const index = ({form,pageHandler}) => {
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
