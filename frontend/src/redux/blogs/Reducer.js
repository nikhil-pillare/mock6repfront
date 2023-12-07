import { FETCHFAILURE, FETCHREQUEST, FETCHSUCCESS, POSTFAILURE,POSTSUCCESS,POSTREQUEST } from "./actionTypes";


const initialState = {
    blogs:[],
    isLoading: false,
    isError: false,
  };


  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHREQUEST:
      case FETCHSUCCESS:
        return {
          ...state,
          isLoading: false,
          blogs: action.payload,
        };
      case FETCHFAILURE:
      
  
      
  
      default:
        return state;
    }
  };
  
  export default blogReducer;