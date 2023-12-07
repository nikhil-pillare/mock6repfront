import { Box, Button, Flex , FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/auth/action";
import { useState , } from "react";
import { useToast } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
function SignIn() {
  const [email, setEmail]= useState("")
  
  const [password, setPassword]= useState("")
   const dispatch = useDispatch();
   const data= useSelector(store=>store.auth.isAuth)
   const toast = useToast()
   const navigate = useNavigate()
   
   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       
       await dispatch(signin({ email, password }));
       if(data){
        toast({
            title: 'Login Successful',
            description: 'Welcome!!',
            status: 'success',
            duration: 6000,
            isClosable: true,
         });
   
        setTimeout(()=>{
          navigate("/blogs");
        },3000)
       }
      
       
    } catch (error) {
     
       toast({
          title: 'Login Failed',
          description: 'Please try again',
          status: 'error',
          duration: 6000,
          isClosable: true,
       });
    }
 } 
 return (
  <Box width={"md"} margin={"auto"}>
  <FormControl>
    <Heading>Login</Heading>
   <FormLabel>E-mail</FormLabel>
   <Input id="loginmail" placeholder='E-mail' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
   <FormLabel>Password</FormLabel>
   <Input id="loginpassword" placeholder='Password' type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
   <Button type="submit" bg={"violet"} onClick={handleSubmit} name="submit">Login</Button>
  </FormControl>
</Box>
);
   
  }
  
  export default SignIn;