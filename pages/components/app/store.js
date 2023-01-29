

import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from '../redux/BlogReducer';
import { userAuthApi } from '../redux/UserAuthApi';
// import { createStore,applyMiddleware } from 'redux'

// import { logger } from 'redux-logger';

// import thunk from 'redux-thunk'

const store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
 
  })
  
  // Store specifically has the thunk and logger middleware applied
// const store = createStore(Reducer, applyMiddleware(logger,thunk), 
 
//     );



export default store;
