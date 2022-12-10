import React from 'react'
import Academy1 from '../../assets/academy1.jpg'
import Academy2 from '../../assets/academy2.jpg'
import Academy3 from '../../assets/academy3.jpg'
import Academy4 from '../../assets/academy4.jpg'
import Academy5 from '../../assets/academy5.jpg'
import Academy6 from '../../assets/academy6.jpg'
import Academy7 from '../../assets/academy7.jpg'
import Academy8 from '../../assets/academy8.jpg'
import Academy9 from '../../assets/academy9.jpg'
import Academy10 from '../../assets/academy10.jpg'
import Academy11 from '../../assets/academy11.jpg'
import Product from '../Product'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Flex, Stack, Text, Box } from '@chakra-ui/layout';
import Explore from './Explore'


export default function OurAcademies() {

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
        <Box pb='5%' bg={'#1E592E'}>
            <Flex direction='column' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#FFF" align={'center'}>
                    11 Academies At 
                </Text>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#F0E6CB" align={'center'}>
                    Vedic India Cultural Center
                </Text>
            </Flex>
            <Stack mb='5' data-aos='fade-up'>
                <Slider {...settings} >
                    <Product IMAGE={Academy1} name={"Vidyapitha"} price={"A systemetic study of shastras through specially designed courses for all ages"}/>
                    <Product IMAGE={Academy2} name={"Swara-Bramha"} price={"Musical training academy focussing on traditional forms of music and Kirtans"}/>
                    <Product IMAGE={Academy3} name={"Nritya-Vatika"} price={"Training academy for traditional Dance forms, Drama and Theatrics"}/>
                    <Product IMAGE={Academy4} name={"KalaNiketana"} price={"School for fine arts and painting"}/>
                    <Product IMAGE={Academy5} name={"BhojanaShala"} price={"Culinary school for learning cooking and various cuisines"}/>
                    <Product IMAGE={Academy6} name={"DharmaKendra"} price={"Training school for Pujaris in deity worship and related skills"}/>
                    <Product IMAGE={Academy7} name={"Samskruti"} price={"Value education classes for children of ages 5 -13 years"}/>
                    <Product IMAGE={Academy8} name={"Vidyashram"} price={"Spiritual education for teenagers of ages 14 – 18 years"}/>
                    <Product IMAGE={Academy9} name={"Yuva Khsetra"} price={"Academic, skill and spiritual training for youth of age above 18 years"}/>
                    <Product IMAGE={Academy10} name={"Vaishnavi sanga"} price={"Spiritual circles for Women"}/>
                    <Product IMAGE={Academy11} name={"Vidura Sanga"} price={"Spiritual circles for Senior citizens"}/>
                </Slider>
            </Stack>
        </Box>
    )
}
