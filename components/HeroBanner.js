import React from 'react'
import { Box, Button, Grid, GridItem, Stack,Text,Image, Container, Center, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import banner from '../assets/images/banner.png'
import { useBreakpointValue } from "@chakra-ui/react";
const HeroBanner = () => {
    const hideimage = useBreakpointValue({base:false , md:true})
  return (
    <>
        <Container maxW={'containe.xl'} fontFamily={'monospace'}>
    <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={10} mt={5} mb={5}>
      <Center>
      <GridItem >
          <Stack>
                <Text color={'red.400'} fontWeight={'bold'} fontSize={'4.5em'}>Fitness Club</Text>
                <Text fontWeight={'bold'} fontSize={'5.5rem'} mt={2}>Sweat,Smile <br/> And Repeat </Text>
                <Text fontSize={'1.5rem'} color={'gray.500'}>Check out the most effective personalized to you</Text>
          </Stack>
          <Link to={'/'}>
                <Button mt={5} color={'white'} fontWeight={'bold'} bg={'red.400'} size={'lg'} w={'50%'}>Explore Exercises</Button>
                </Link>


        </GridItem>
      </Center>
        <GridItem w='100%'  >

          <Stack >
            {
                hideimage && <Image  src={banner} borderRadius={'10px'} w={700} />
            }
            
          </Stack>

        </GridItem>
      </Grid>
    </Container>
    </>
  )
}

export default HeroBanner