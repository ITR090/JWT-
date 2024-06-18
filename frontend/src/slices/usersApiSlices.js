import {apiSlices} from './apiSlices'

const USER_API = '/api/users'

export const usersApiSlices = apiSlices.injectEndpoints({
    endpoints:(builder)=> ({
        login: builder.mutation({
            query:(data)=>({
                url:`${USER_API}/login`,
                method:'POST',
                body:data
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USER_API}/logout`,
                method:'POST',
            })
        })
    })
})


export const {useLoginMutation,useLogoutMutation} = usersApiSlices