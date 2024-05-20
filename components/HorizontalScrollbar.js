import React, { useContext } from 'react'
import { Box, Image,Text } from '@chakra-ui/react'
import BodyPart from './BodyPart'
import { ExerciseCard } from './Exercise'
import '../App.css'
// import LeftArrowIcon from '../assets/icons/left-arrow.png'
// import RightArrowIcon from '../assets/icons/right-arrow.png'
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu'

// const LeftArrow = () => {
//     const {scrollPrev} = useContext(VisibilityContext)
//     return (
//         <Text>
//             <Image src={LeftArrowIcon}  onClick={() => scrollPrev()} className="right-arrow" />
//         </Text>
//     )
// }
// const RightArrow = () => {
//     const {scrollNext} = useContext(VisibilityContext);
//     return(
//         <Text >
//             <Image src={RightArrowIcon} onClick={() => scrollNext()} className='left-arrow'/>
//         </Text>
//     )
// }
const HorizontalScrollbar = ({data,bodyParts, setBodyPart,bodyPart}) => {
  return (
    <ScrollMenu>
        {
            data.map((item) => (
                <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m={"0 40px"}>
                   {bodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
                </Box>
            ))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollbar