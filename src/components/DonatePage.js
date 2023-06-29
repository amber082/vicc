import React, {useEffect} from 'react'
import {Flex,Text,Heading,Image} from '@chakra-ui/react'
import { GoLocation } from 'react-icons/go';
import DonateBg from '../assets/donate_bg.png'
import Explore from './landingPageComonents/Explore'
import Donate from './DonationComp'
import DonateRadio from './DonateRadio'
import DonationWays from './DonationWays'
import TempleMock from './landingPageComonents/TempleMock'
import Glories from './landingPageComonents/Glories'
import '@fontsource/playball'
import AOS from 'aos';

export default function Hero() {
    useEffect(() => {
        AOS.init({duration:1000});
        AOS.refresh();
      },[])

    return (
        <>
        <Flex direction="column" marginBottom={'20%'} id='home'> 
            <Image objectFit={{base:'cover',md:'fill'}} src={DonateBg} alt='Main SVG' position={'absolute'} w={{base:'auto',md:'100%'}} h={{base:'112vw',md:'86vw',lg:'54vw'}} top='0' zIndex={-2}></Image>
            {/* <Image objectFit='fill' src={Blob} alt='Main SVG' position={'absolute'} w={{base:'auto',md:'100%'}} h={{base:'59vw',lg:'42vw'}} zIndex={-1}></Image> */}
            <Flex direction={{base:'column',md:'row'}} align='center' justify='center' wrap='wrap' mt={{base:'0',md:'10',lg:'120'}} ml={{base:'0%',md:'0'}}>
                <div data-aos='fade-up'>
                <Flex  direction='column' align={{base:'center',md:'center'}} justify='space-around' wrap='wrap' >
                    <Heading fontSize={{base:'3xl',md:'6xl'}} fontWeight='920' color="#F0E6CB" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'center'}} flexDirection='column'> 
                        <Text>VEDIC INDIA</Text>
                        <Text>CULTURAL CENTER</Text>
                    </Heading>
                    <Heading fontSize={{base:'small',md:'medium'}} fontWeight='920' color="#F0E6CB" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'center'}} flexDirection='row'> 
                        <GoLocation/>
                        <Text pl='2'>  CULTURAL LANDMARK OF VARANASI</Text>
                    </Heading>
                    <Heading mt='10' bg={{base:'black',md:'transparent'}} opacity={{base:'80%', md:'100%'}} fontFamily={'Playball'} fontSize={{base:'xl',md:'2xl'}} fontWeight='520' color="#F0E6CB" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'center'}} textAlign={'center'} flexDirection='column'> 
                        <Text m='2'>  Building Together, Creating a Sacred Legacy</Text>
                        <Text m='2'>  Support the Construction of Our Divine Temple</Text>
                        <Text m='2'>  By Donating Whatever in your capacity and become the part of our vision</Text>
                    </Heading>
                    <Explore/>
                </Flex>
                </div>
            </Flex>
        </Flex>
        <DonationWays/>
        <TempleMock/>
        <Glories/>
        <DonateRadio/>
        <Donate/>
        </>
    )
}