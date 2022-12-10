import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Flex, Image, Text} from '@chakra-ui/react'
import '@fontsource/playball'

export default function Explore({Name, IMAGE, WIDTH, COLOR}) {
    return (
        <Flex direction={'column'} align='center' justifyContent={'center'} py='2%'>
            <Text zIndex='2' position={'absolute'} fontSize='2xl' fontWeight={'medium'} color={COLOR} fontFamily={'Playball'}>{Name}</Text>
            <Image src={IMAGE} zIndex='1' width={WIDTH}/>
        </Flex>
    )
}