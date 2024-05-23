import { createSlice } from '@reduxjs/toolkit'


const initialState  = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

const authSlice = createSlice({
    name:'client_auth',
    initialState,
    reducers: {
        setCredentials :(state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem('userInfo')
        },
        logout:(state,action)=>{
            state.userInfo = null
            localStorage.removeItem('userInfo')
        },
    }
})



export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;