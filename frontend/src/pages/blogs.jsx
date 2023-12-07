import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button,Heading, Card, CardHeader, CardBody, CardFooter , Image, Stack, Text, Divider, ButtonGroup, Select } from '@chakra-ui/react';
import { fetchBlogs } from '../redux/blogs/action';



function Blogs() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    console.log(blogs)
   


    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <Box>
            
            <Select>
                <option value="">filter</option>
                <option value="business">Business</option>
                <option value="tech">tech</option>
                <option value="lifestyoe">lifestyle</option>
                <option value="bentertain">entertain</option>
            </Select>
            <Select>
                <option value="">sort</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
               
            </Select>
            <Heading>blogs</Heading>
            <Card maxW='sm'>
                {
                 blogs && blogs.map((ele)=>{
                    <CardBody>
                    <Image
                        src={ele.avatar}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                       <Text fontWeight={"bolder"}>{ele.title}</Text> 
                       <Text >{ele.content}</Text> 
                    </Stack>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            EDIT
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            DELETE
                        </Button>
                    </ButtonGroup>
                </CardBody>
                 })
                
               
               }
            </Card>
        </Box>
    )
}


export default Blogs