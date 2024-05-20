import { Center, Container, Grid, GridItem, VStack, Text, Input, HStack, Button, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchdata,Exerciseoptions } from '../utils/fetchdata';
import HorizontalScrollbar from './HorizontalScrollbar';

//these props are comming from home
const SearchExercise = ({setExercises,bodyPart,setBodyPart}) => {

  const [search,setSearch] = useState("");
  // const [exercise,setExercise] = useState([]);
  const [bodyParts , setbodypart] = useState([]);

  // const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'baa4902a99mshef8961ac37b001ep173180jsn88f1733c223a',
  //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }
  // };

  useEffect(() => {
      const fetchexercisedata = async () => {
        const bodyPartsData = await fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', Exerciseoptions)
        setbodypart(['all', ...bodyPartsData])
      }
      fetchexercisedata()
  },[])

  const handlesearch = async () => {
    if(search){
      const exercisedata = await fetchdata ('https://exercisedb.p.rapidapi.com/exercises?limit=1000', Exerciseoptions);
      console.log(exercisedata)

      // const fetchdata = await fetch (url,options);
      // const data = await fetchdata.json()
      // console.log(data)

      const searchExercise  = exercisedata.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch("")
      setExercises(searchExercise)
    }
  }
  return (
    <>
      <Container maxW={'containe.xl'} mt={32}>
        <Center mt={10}>
          <VStack mt={12} fontSize={'3.5em'} fontWeight={'bold'} fontFamily={'monospace'}>
            <Text>Awesome Exercises You</Text>
            <Text> Should Know</Text>
          </VStack>
        </Center>
        <Center>
          <HStack w={'full'} mt={12}>
            <Container maxW={'container.xl'}>
              <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                <GridItem w='100%' >
                  <HStack fontSize={'2.5rem'}>
                    <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    bg={'white'} fontSize={'1.5rem'} h={16} placeholder='Seach Here' border={'1px solid black'} />
                    <Button onClick={handlesearch} fontSize={'1.25rem'} h={16} w={100} bg={'red.400'} color={'white'}>Search</Button>
                  </HStack>
                </GridItem>
              </Grid>
            </Container>
          </HStack>
        </Center>


        <Box style={{position:'relative', width:"100%",p:"20px"}}>
            <HorizontalScrollbar data = {bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>


      </Container>

    </>
  )
}

export default SearchExercise