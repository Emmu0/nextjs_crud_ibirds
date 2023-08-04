"use client"

import TopicList from '@/components/TopicList'
import reducers from "../redux/reducers";
import Homepage from './homePage/homepage'
import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk'
import MainNavbar from '@/components/mainNavbar/mainNavbar';
import { useState } from 'react';
import DefaultPage from "./defaultPage";

export default function Home() {
  const [dec, setdec] = useState(false)


  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  const [form, setFrom] = useState()
  const pageHandler = (val) => {
      setFrom(val)
  }

  return (
    <>
      <Provider store={store}>
        <MainNavbar pageHandler={pageHandler} />
        <div className="mt-8 pt-5" >
          {localStorage.getItem("token") ?
            <Homepage />
            :
            <DefaultPage form={form} pageHandler={pageHandler} />
          }
        </div>


      </Provider>
    </>

  )
}
