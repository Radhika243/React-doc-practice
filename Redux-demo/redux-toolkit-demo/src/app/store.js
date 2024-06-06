import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cakes/cakeSlice';
import icecreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
   reducer:{
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
   },
   middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(logger)
   }
});

