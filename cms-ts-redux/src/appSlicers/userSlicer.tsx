

// define the initial state of the user

import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isLoggedIn : false,
    
}

// create a slice , slice will contains the state and its actions(reducers)

const userSlicer= createSlice({
    // name of slice , to access outside
    name:'user',
    // initial state
    initialState,
    reducers:{
        login: (state)=>{
            state.isLoggedIn = !state.isLoggedIn;
            
        },
        logout: (state)=>{
            state.isLoggedIn = !state.isLoggedIn
        }
    }
});


// expose ur action to outside

export const {login, logout} = userSlicer.actions

export default userSlicer.reducer