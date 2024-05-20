import React, { useEffect, useState } from 'react'
import {Pagination} from '@mui/material';
import { Box , Button, Image, Stack, Text} from '@chakra-ui/react'
import '../App.css'
import { Exerciseoptions , fetchdata} from '../utils/fetchdata'
import { Link } from 'react-router-dom'
const Exercise = ({exercise,setExercises,bodyPart}) => {
  
  const [currentPage , setCurrentPage] = useState(1);
  const exerciseperpage = 8;

  const indexofLast = currentPage*exerciseperpage;
  const indexofFirst = indexofLast-exerciseperpage

  // const currentExercise = exercise.slice(indexofFirst,indexofLast)

  const paginate = (e,value) => {
    setCurrentPage(value);

    window.scrollTo({top: 1800, behavior:"smooth"})
  }

  useEffect(()=>{
    const fetchexercisedata = async () => {
      let exercisedata = [];
      if(bodyPart === 'all') {
        exercisedata = await fetchdata("https://exercisedb.p.rapidapi.com/exercises",Exerciseoptions)
      }
      else {
        exercisedata = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,Exerciseoptions)
      }
      setExercises(exercisedata)
    }
    fetchexercisedata();
  },[bodyPart])

  return (
    <>
      <Box id="exercises" mt={"50px"} p={"100px"}>
          <Text fontSize={'2.5rem'} fontFamily={'arial'} fontWeight={'bold'}>
            Showing Results
          </Text>

          <Stack direction={'row'} gap={"110px"} flexWrap={"wrap"} justifyContent={"center"} mt={12}>
              {
                exercise.map((exercise,index) => (
                 <ExerciseCard  key={index} exercise={exercise}/>
                ))
              }
          </Stack>
          <Stack mt={'100px'} alignItems={'center'}>
            {
              exercise.length > 8 && (
                <Pagination
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercise.length/exerciseperpage)}
                page={currentPage}
                onChange={paginate}
                size='large'
                />
              )
            }
          </Stack>
      </Box>
    </>
  )
}

export const ExerciseCard = ({exercise}) => {
  return (
    <>
      <Link className='exercise-card' to={`/exercisedetails/${exercise.id}`}>
        <Image src={exercise.gifUrl}/>
        <Stack direction={"row"}>
            <Button ml={'21px'} color={'#fff'} bg={'#ffa9a9'} fontSize={'15px'} borderRadius={'20px'} textTransform={'capitalize'}>
              {exercise.bodyPart}
            </Button>

            <Button ml={'21px'} color={'#fff'} bg={'#fcc757'} fontSize={'15px'} borderRadius={'20px'} textTransform={'capitalize'}>
              {exercise.target}
            </Button>
        </Stack>
        <Text ml={'20px'} color={"#000"} fontWeight={"bold"} mt={"10px"} pb={"10px"} textTransform={"capitalize"} fontSize={"20px"}>{exercise.name}</Text>

      </Link>
    </>
  )
}
export default Exercise