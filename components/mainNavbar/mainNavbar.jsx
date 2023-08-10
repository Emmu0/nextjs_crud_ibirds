"use client";
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch } from 'react-redux';
import { loginOut } from '@/redux/action/api';


const MainNavbar = ({pageHandler}) => {
  const dispatch = useDispatch();

const logouthandler = () =>{
  dispatch(loginOut())
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 fixed-top">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {localStorage.getItem("token") ? <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/hubRoot/addTopic">
              ToDo
            </a>
          </li>
          {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input className="form-control mr-sm-2 mx-lg-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 py-1 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <button className="btn btn-success my-2 py-1 ml-2 my-sm-0" onClick={()=>logouthandler()}>
          logOut
        </button>
      </div>
        :
        <ul className="navbar-nav ml-auto ">
          <li>
            <button className="nav-link" onClick={()=>pageHandler("Login")}>
               <span className="btn btn-success my-2 py-1 ml-2 my-sm-0">LogIn</span>
            </button>
          </li>
          <li> 
            <button  className="nav-link" href="/hubRoot/addTopic" onClick={()=>pageHandler("Signup")}>
            <span className="btn btn-success my-2 py-1 ml-2 my-sm-0">SignUp</span>
            </button>
          </li>
          
        </ul>}
    </nav>
  );
};

export default MainNavbar;
