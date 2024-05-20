import React, { useEffect, useState } from 'react'
import Details from './Details'
import ExerciseVideo from './ExerciseVideo'
import Similar from './Similar'
import {useParams} from 'react-router-dom'
import {Box} from '@chakra-ui/react'
import {Exerciseoptions,fetchdata,options} from '../utils/fetchdata'

const ExercisDetails = () => {
  const [exersiDetails,setExerciseDetails] = useState({});
  const [exercisevideo,setExerciseVideo] = useState([])
  const [similarExercise,setSimilarExercise] = useState([]);
  const [equipments,setEquipments] = useState([]);
  
  const {id} = useParams();

  useEffect(() => {
      const fetchExerciseDetails = async () => {
          const exerciseDbUrl = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,Exerciseoptions)
          const youtubeSearchUrl = await fetchdata (`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDbUrl.name} exercise`,options)
        
          const SimilarExercise = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDbUrl.target}`,Exerciseoptions)
          const equipmentsExercise = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDbUrl.equipment}`,Exerciseoptions)
          
          
          setExerciseDetails(exerciseDbUrl)
          setExerciseVideo(youtubeSearchUrl.contents)
          setSimilarExercise(SimilarExercise)
          setEquipments(equipmentsExercise)
      }
      fetchExerciseDetails()
  },[id]);
  return (
    <>
    <Box>
    <Details exersiDetails={exersiDetails}/>
    <ExerciseVideo exercisevideo={exercisevideo} name={exersiDetails.name}/>
    <Similar similarExercise={similarExercise} equipments={equipments}/>
    </Box>
    </>
  )
}

export default ExercisDetails