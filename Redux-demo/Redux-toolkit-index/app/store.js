const {configureStore}=require('@reduxjs/toolkit');
const cakeReducer = require('../features/cakes/cakeSlice');
const icecreamReducer = require('../features/icecream/iceCreamSlice');
const userReducer = require('../features/user/userSlice');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const store = configureStore({
   reducer:{
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
   },
   middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(logger)
   }
});

module.exports = store;