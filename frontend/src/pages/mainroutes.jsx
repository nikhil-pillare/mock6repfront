import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { PrivateRoute } from "../components/PrivateRoute";
import Blogs from "./blogs";
export const MainRoutes=()=>{

    return <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/blogs" element={
    <PrivateRoute>
          <Blogs/>
    </PrivateRoute>
    }/>
    
</Routes>
}