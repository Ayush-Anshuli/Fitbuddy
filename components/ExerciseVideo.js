import { Box, Center, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ExerciseVideo = ({exercisevideo,name}) => {
  return (
    <>
    <Center>
        <Box mt={["20px","150px","200px"]} p={"20px"}>
            <Text fontSize={"2rem"} mb={"35px"}>
                Watch <span style={{color:"red"}} >{name}</span> exercise videos
            </Text>
            <Stack justifyContent={"center"} flexWrap={"wrap"}  alignItems={"center"} flexDirection={["column","column","row"]} gap={["0","100px"]}>
                    
                    {
                        

                        exercisevideo?.slice(0,8)?.map((item,index) => (
                            <a key={index}
                            className='exercise-video'
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target='_blank'
                            style={{padding:"20px"}}
                            >
                                <Image w={500} src={item.video.thumbnails[0].url}/>
                                <Box>
                                    <Text fontSize={"1.3rem"}>
                                        {item.video.title}
                                        {item.video.channelName}
                                    </Text>
                                    <Text fontSize={"1rem"} fontWeight={"bold"}>
                                        {item.video.channelName}
                                    </Text>
                                </Box>
                            </a>
                        ))
                        
                    }
            </Stack>
        </Box>
        </Center>
    </>
  )
}

export default ExerciseVideo