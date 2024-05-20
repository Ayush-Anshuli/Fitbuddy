import React from 'react'
import '../App.css'
import { Image, Stack,Text } from '@chakra-ui/react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
   <Stack mt={20} type='button' alignItems={"center"} justifyContent={"center"} className='bodyPart-card'
   sx= {{
    borderTop : bodyPart === item ? "4px solid #ff2625" : "",
    backgroundColor:'#fff',
    borderBottomRadius:'20px',
    width:"270px",
    height:"280px",
    cursor:"pointer",
    gap:"47px"
   }}
   onClick={() =>{setBodyPart(item);
    window.scrollTo({top:1800,left:100,behavior:"smooth"})
   }}
   >
        <Image src={Icon} w={'40px'} h={'40px'}/>
        <Text fontSize={'24px'} fontWeight={"bold"} color={"#3A1212"} textTransform={"capitalize"}>{item}</Text>
   </Stack>
  )
}

export default BodyPart