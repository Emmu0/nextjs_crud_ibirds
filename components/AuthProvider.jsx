"use client";
import React from 'react'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from '@/redux/reducers';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const AuthProvider = ({ children }) => {

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(reduxThunk))
      );
    // console.log({children},'children');
    return (
        <div>
            <SessionProvider>
                <Provider store={store}>
                    {children}
                </Provider>
            </SessionProvider>
        </div>
    )
}

export default AuthProvider
