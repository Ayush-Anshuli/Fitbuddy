import { Center, Stack } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
   <>
        <Center>
            <Spinner h={[100]} w={[100]}/>
        </Center>
   </>
  )
}

export default Loader