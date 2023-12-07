import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Nav() {

    return(
        <Flex align="center" justify="space-around" width="100%" height="70px" bgGradient="linear(to-r, gray.300, violet)"  mb="50px">
        <Link to={"/"}>REGISTER</Link>
        <Link to={"/signin"}>LOGIN</Link>
        <Link to={"/blogs"}>BLOGS</Link>
    </Flex>
    )
    
}

export default Nav;