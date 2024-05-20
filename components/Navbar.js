import React from 'react'
import {Link} from 'react-router-dom'
import {Container, HStack, Image, Stack,Text} from '@chakra-ui/react'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <>
    <Container maxW={'containe.xl'} px={8}>
    <Stack>
        <HStack  justifyContent={'space-between'} mt={5} mb={5} fontSize={'1.2rem'}>
          <HStack >
            <Link to={'/'} style={{display:"flex"}}>
            <Image src={Logo} /><Text mt={3} ml={2} fontFamily={'Briem Hand'}>FIT BUDDY</Text>       
            </Link>
            </HStack>
          <HStack gap={10}>
          <Link to={'/'}>
             Home
           </Link>
           <Link to={'/'}>
             Exercise
           </Link>
           <Link to={'/'}>
             About
           </Link>
          </HStack>
          
        </HStack>
      </Stack>
    </Container>

    </>
  )
}

export default Navbar