import { FETCHFAILURE, FETCHREQUEST, FETCHSUCCESS, POSTFAILURE,POSTSUCCESS,POSTREQUEST } from "./actionTypes";
import axios from "axios";



export const fetchBlogs = () => async (dispatch) => {
    dispatch({ type: FETCHREQUEST});
  
    try {
      const response = await axios.get('https://mock6repback-production.up.railway.app/api/blogs');
      dispatch({ type: FETCHSUCCESS, payload: response.data });
      console.log(response.data)
      console.log(response)
    } catch (error) {
      dispatch({ type: FETCHFAILURE, payload: error.message });
    }
  };