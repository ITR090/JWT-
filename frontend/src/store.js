import {configureStore} from '@reduxjs/toolkit'
import authSlices from './slices/authSlices'
import {apiSlices} from './slices/apiSlices'
const store = configureStore({
    reducer :{
        client_auth:authSlices,
        [apiSlices.reducerPath]: apiSlices.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlices.middleware),
    devTools:true 
})


export default store