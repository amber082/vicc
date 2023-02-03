import React from 'react'
import Construct1 from '../../assets/construct1.jpeg'
import Construct2 from '../../assets/construct2.jpeg'
import Construct3 from '../../assets/construct3.jpeg'
import Construct4 from '../../assets/construct4.jpeg'
import Construct from '../Construct'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Flex, Stack, Text, Box } from '@chakra-ui/layout';
import Explore from './Explore'


export default function Ourproducts() {

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows:true,
        easing:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                className: "center",
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows:false,
                easing:true,
                accessibility:true,
                autoplay:true,
                autoplaySpeed:3000,
              }
            }]
    };

    return (
        <Box mb={'5%'} mt={'5%'} id='construction'>
            <Flex direction='column' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#000000" align={'center'}>
                    Construction Updates
                </Text>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42" align={'center'}>
                    Construction updates as on 1st February
                </Text>
            </Flex>
            <Stack mb='5%' data-aos='fade-up'>
                <Slider {...settings} >
                    <Construct IMAGE={Construct1} />
                    <Construct IMAGE={Construct2} />
                    <Construct IMAGE={Construct3} />
                    <Construct IMAGE={Construct4} />
                </Slider>
            </Stack>
            <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
                ISKCON VICC Construction updates: The demolition work has been completed & temple foundation is being laid
            </Text>
            <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
                the construction officially starts today.
            </Text>
        </Box>
    )
}
