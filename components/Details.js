import { Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import equipmentimg from '../assets/icons/equipment.png'
import body from '../assets/icons/body-part.png'
import targetimg from '../assets/icons/target.png'

const Details = ({exersiDetails}) => {
    const { bodyPart , gifUrl, name,target,equipment} = exersiDetails

    const detal = [
        {
            icon: equipmentimg,
            names: target
        },
        { 
            icon: body,
            names: bodyPart
        },
        {
            icon: targetimg,
            names: equipment
        },
    ]

  return (
    <>
        <Stack gap={"60px"} flexDirection={"row"} p={"20px"} alignItems={"center"}>
            <img src={gifUrl} loading="lazy" className='detail-image' />
            <Stack gap={['20px','30px',"35px"]}>
                <Text fontSize={"2rem"}>
                    {name}
                </Text>
                <Text fontSize={"1.5rem"} w={"70%"}>
                    Exercise keep you strog. {name}
                    is one of the best exercises to target your {target}. It will help you to improve
                    your mood and gain energy.
                </Text>
                {
                    detal.map((item) => (
                        <Stack direction={"row"} alignItems={"center"} gap={"20px"} key={item.id} mt={5}>
                            <Image bg={"#FFFDD0"} p={2} borderRadius={"50%"} src={item.icon}  w={20}/>
                            <Text textTransform={"capitalize"} fontSize={["1.5rem"]}>{item.names}</Text>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    </>
  )
}

export default Details