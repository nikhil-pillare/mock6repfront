import { Box, Flex, FormControl, FormLabel, Input, Heading, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../redux/auth/action";
function SignUp() {
      const [email, setEmail]= useState("")
      const [username, setUsername]= useState("")
      const [avatar, setAvatar]= useState("")
      const [password, setPassword]= useState("")
   const dispatch= useDispatch();
   const toast = useToast()
   const Navigate = useNavigate();

   const handleSubmit=(event)=>{
         event.preventDefault();
         try {
          dispatch(signup({email, username, avatar, password}))
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            colorScheme: 'green'
          })
          Navigate("./signin")
         } catch (error) {
          toast({
            title: 'error',
            description: "invalid credentials",
            status: 'error',
            duration: 9000,
            isClosable: true,
            
          })
         }
   }

   return (
    <Box  width={"md"} margin={"auto"}>
      <FormControl>
      <Heading>REGISTER</Heading>
      <FormLabel>Username</FormLabel>
       <Input id="email" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
       <FormLabel>avatar</FormLabel>
       <Input id="image" placeholder='Profile Photo URL' value={avatar} onChange={(e)=>setAvatar(e.target.value)}/>
       <FormLabel>E-mail</FormLabel>
       <Input id="email" placeholder='E-mail' type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <FormLabel>password</FormLabel>
       <Input id="password" placeholder='Password' type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <Button onClick={handleSubmit} bg={"violet"} name="submit">Register</Button>
      </FormControl>
    </Box>
  );

  }
  
  export default SignUp;