import React from 'react'
import {  Button,Box,TextField , Typography } from '@mui/material';
import { useState ,useEffect} from 'react';
import axios from 'axios';
const SearchEngine = () => {
    const [text,setText] = useState('')
    const [response,setResponse] = useState([])

    useEffect(()=>{
console.log(response)
    },[response])   
    const onSearchHandler = () =>{
        console.log(text)
        const postObj={
            'query':text
        }
       axios.post('https://efd8-136-232-1-174.ngrok-free.app/safesearch/',postObj).then((res)=>{
        setResponse(res.data.results);
        console.log(res.data.results)
       })
    }

    const onClickHandler = () => {
        // axios.post('')
    }

  return (
    <>
      <Box m='20px' h='100vh' w='100vw'>
        <Box display='flex' justifyContent='center' w=''>
      <TextField id="outlined-basic" label="Search field" variant="outlined" onChange={(e)=>setText(e.target.value)}/>
      <Button variant="contained"  onClick={()=>onSearchHandler()}>Search</Button>
        </Box>
        {/* <Box display='grid' gridTemplateColumns='repeat(12,1fr)' gridAutoRows='140px' justifyContent='center' alignItems='center'>
  <Box gridColumn='4 / span 6' display='flex' justifyContent='center' alignItems='center'>
    <Typography>hi</Typography>
  </Box>
</Box> */}

 {response.length > 0 && response.map((item,i) => (
            <Box
              key={i}
             
              borderBottom={`1px solid black`}
              p="15px"
            >
              <Box>
                <Typography
                  color='black'
                  variant="h5"
                  fontWeight="100"
                >
                  {item.link}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
              </Box>
              <Box>
                <Typography
                  color='black'
                  variant="h5"
                  fontWeight="100"
                >
                  {item.title}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography> */}
              </Box>
              <Button
              style={{backgroundColor:'#a4a9fc'}}
                // bg={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                href={item.link}
                variant='contained'
                onClick={()=>onClickHandler()}
              >
               Go to this website
              </Button>
            </Box>
          ))}
      </Box>
    </>
  )
}

export default SearchEngine