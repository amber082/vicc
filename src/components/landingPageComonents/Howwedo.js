import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Howcomp from './Howcomp'

export default function Howwedo() {
    return (
        <Flex direction='column' align='center' justify='space-around' m='5' wrap='nowrap'>
            <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='800' color="#233862" data-aos='fade-down'>
                What We Deliver?
            </Text>
            <Flex direction={{base:'column', md:'row'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap' mt='10'>
                <Howcomp Title={"11th - 12th"} Content={"JEE MAIN <br/> JEE ADVANCE"}/>
                <Howcomp Title={"8th - 10th"} Content={"Foundation, RMO, NTSE, SOS"}/>
                <Howcomp Title={"8th - 12th"} Content={"BOARDS + Mains <br/> BOARDS + NEET"}/>
                <Howcomp Title={"Open to ALL"} Content={"Spoken <br/> English"}/>
            </Flex>
            
        </Flex>
    )
}
