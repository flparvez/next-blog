

import { configureStore } from '@reduxjs/toolkit';
// import { Reducer } from '../redux/BlogReducer';
import { userAuthApi } from '../redux/UserAuthApi';

const store = configureStore({
    // reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
 
  })
  
 


export default store;
