import React,{useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedAlreadyLogin({children}) {

    // define navigation
    const navigation =useNavigate();
    // define global varaible
    const {isLoggedIn,user}=useSelector(features=>features.auth);
    // running at the first and only run if vriable closure changed

    useEffect(()=>{
        if(isLoggedIn || user) return navigation("/") ;
    },[isLoggedIn,user,navigation])
    
  return children;
}

export default ProtectedAlreadyLogin