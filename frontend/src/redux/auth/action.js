import axios from "axios";
import { SIGNINFAILURE,SIGNUPFAILURE, SIGNINREQUEST, SIGNINSUCCESS, SIGNUPREQUEST, SIGNUPSUCCESS, } from "./actionTypes";

export const signup=({username, email, password, avatar})=>(dispatch)=>{
          dispatch({type: SIGNUPREQUEST})
          axios.post('https://mock6repback-production.up.railway.app/api/register', {username, email, password, avatar})
          .then((res)=>{
            dispatch({type: SIGNUPSUCCESS})
          })
          .catch((req)=>{
            dispatch({type: SIGNUPFAILURE})
          })
}

export const signin=({email, password})=>(dispatch)=>{
    dispatch({type: SIGNINREQUEST})
    axios.post('https://mock6repback-production.up.railway.app/api/login', {email, password,})
    .then((res)=>{
      dispatch({type: SIGNINSUCCESS, token: res.token})
    })
    .catch((req)=>{
      dispatch({type: SIGNINFAILURE})
    })
}