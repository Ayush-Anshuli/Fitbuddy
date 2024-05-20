import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import Loader from './Loader'

const Similar = ({similarExercise,equipments}) => {
  return (
    <>
        <Box mt={["0","150px"]}>
            <Text fontSize={"2rem"} p={"20px"}>Exercises that target the same muscle group</Text>
            <Stack direction={['column','column','row']} w={'94%'}>
                {similarExercise.length ? <HorizontalScrollbar data={similarExercise}/>:<Loader/>}
            </Stack>
            <Text fontSize={"2rem"} p={"20px"}>Exercises that use the same equipments exercises</Text>
            <Stack direction={['column','column','row']} w={'94%'}>
                {equipments.length ? <HorizontalScrollbar data={equipments}/>:<Loader/>}
            </Stack>
        </Box>
    </>
  )
}

export default Similar