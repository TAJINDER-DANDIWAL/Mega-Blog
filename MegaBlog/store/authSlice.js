import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userdata: null,
    status: "false",
    active: "false"
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LogIn:(state,action)=>{
            state.status = "true";
            state.userdata = action.payload.userdata;
        },
        LogOut: (state)=>{
            state.status =  "false";
            state.userdata = null;
            
        }
    }
})

export default authSlice.reducer;
export const {LogIn,LogOut} = authSlice.actions;
