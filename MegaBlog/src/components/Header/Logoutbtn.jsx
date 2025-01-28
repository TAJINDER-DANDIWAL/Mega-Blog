import React from "react";
import authservice from "../../AppWrite/auth";
import { LogOut } from "../../../store/authSlice";
import { useDispatch } from "react-redux";


function Logoutbtn() {

    let dispatch = useDispatch()
    let LogoutHandler = ()=>{
        authservice.Logout().then(()=>{
            dispatch(LogOut)
        })
    }

    return(
        <button onClick={LogoutHandler}>Logout</button>
    )
}

export default Logoutbtn;