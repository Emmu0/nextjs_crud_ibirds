"use client";
import { applyMiddleware, compose, createStore, } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "@/redux/reducers";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk'



export function Providers({ children }) {

   
    return (
        
        <Provider store={store}>
            {children}
        </Provider>
    )
}