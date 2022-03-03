import React from 'react'
import { Outlet,Navigate} from 'react-router-dom';
import {useSelector } from 'react-redux'
export default function ProtectedRoutes() {
    const {isAuth} = useSelector(state=> state.data);
    console.log("Is auth",isAuth);
    return (isAuth !== "true") ?  <Navigate to ="/"/>:<Outlet />
}
