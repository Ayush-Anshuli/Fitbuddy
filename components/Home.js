
import SearchExercise from './SearchExercise'
import HeroBanner from './HeroBanner'
import { useState } from 'react';
import Exercise from './Exercise';
const Home = () => {
  const [bodyPart , setBodyPart] = useState("all");
  const [exercise,setExercise] = useState([]);
  return (

    <>
    <HeroBanner />
    <SearchExercise setExercises={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercise exercise={exercise} setExercises={setExercise} bodyPart={bodyPart} />
    </>
  )
}

export default Home