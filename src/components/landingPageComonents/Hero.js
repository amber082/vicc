import React from 'react'
import {Flex,Text,Heading,Image} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go';
import Temple from '../../assets/temple_2.png'
import DonateButton from './DonateButton'

export default function Hero() {
    return (
        <Flex direction="column" marginBottom={'30%'} id='home'> 
            <Image objectFit={{base:'cover',md:'fill'}} src={Temple} alt='Main SVG' position={'absolute'} w={{base:'auto',md:'100%'}} h={{base:'112vw',md:'86vw',lg:'54vw'}} top='0' zIndex={-2}></Image>
            {/* <Image objectFit='fill' src={Blob} alt='Main SVG' position={'absolute'} w={{base:'auto',md:'100%'}} h={{base:'59vw',lg:'42vw'}} zIndex={-1}></Image> */}
            <Flex direction={{base:'column',md:'row'}} align='left' justify='flex-start' wrap='wrap' mt={{base:'0',md:'10',lg:'120'}} ml={{base:'0%',md:'20%'}}>
                <div data-aos='fade-up'>
                <Flex  direction='column' align={{base:'center',md:'flex-start'}} justify='space-around' wrap='wrap' >
                    <Heading fontSize={{base:'3xl',md:'6xl'}} fontWeight='920' color="#F0E6CB" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'flex-start'}} flexDirection='column'> 
                        <Text>VEDIC INDIA</Text>
                        <Text>CULTURAL CENTER</Text>
                    </Heading>
                    <Heading fontSize={{base:'small',md:'medium'}} fontWeight='920' color="#F0E6CB" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'flex-start'}} flexDirection='row'> 
                        <GoLocation/>
                        <Text pl='2'>  CULTURAL LANDMARK OF VARANASI</Text>
                    </Heading>
                    <DonateButton/>
                </Flex>
                </div>
            </Flex>
        </Flex>
    )
}