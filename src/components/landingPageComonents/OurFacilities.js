import React from 'react'
import Facility1 from '../../assets/facility1.jpg'
import Facility2 from '../../assets/facility2.jpg'
import Facility3 from '../../assets/facility3.jpg'
import Facility4 from '../../assets/facility4.jpg'
import Facility5 from '../../assets/facility5.jpg'
import Facility6 from '../../assets/facility6.jpg'
import Facility7 from '../../assets/facility7.jpg'
import Facility8 from '../../assets/facility8.jpeg'
import Facility from '../Facility'
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
        <Box mb={'5%'}>
            <Flex direction='column' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#000000" align={'center'}>
                    Facilities At
                </Text>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42" align={'center'}>
                    Vedic India Cultural Center
                </Text>
            </Flex>
            <Stack mb='5' data-aos='fade-up'>
                <Slider {...settings} >
                    <Facility IMAGE={Facility1} name={"Temple Hall"} desc={"An attractive temple hall will constitute the altar of Sri Sri Radha Gopal ji in the center. On the other side, the altar of His Divine Grace A.C Bhaktiventa Swami Prabhupada will be situated. The walls of the temple hall will be decorated with beautiful murals depicting the pastimes of Lord Krishna and Lord Chaitanya Mahaprabhu. The fully air-conditioned temple hall will have a seating capacity of over 2000 devotees."}/>
                    <Facility IMAGE={Facility2} name={"Gift Shop"} desc={"Devotional paraphernalia for service of Sri Sri Radha Gopal ji. The gift shop will also have a collection of books by Srila Prabhupada and other acharyas."}/>
                    <Facility IMAGE={Facility3} name={"Prasadam Hall"} desc={"With a seating capacity of more than 1000, Prasadam Hall will facilitate devotees to replnish the spiritual food."}/>
                    <Facility IMAGE={Facility4} name={"Guest House"} desc={"To accomodate the devotees visiting VICC, a number of air conditioned guest rooms with all the basic facilities will be available."}/>
                    <Facility IMAGE={Facility5} name={"Banquet Hall"} desc={"A marvellous banquet hall with a capacity of more than 2000 people will facilitate grand events, festival, marriages, celebrations, etc. The hall will be equipped with all the modern facilities and arrangements."}/>
                    <Facility IMAGE={Facility6} name={"Food Stalls"} desc={"The food stalls with seating capacity of 60 people will serve varities of prasadam to the guests."}/>
                    <Facility IMAGE={Facility7} name={"Vedic Library"} desc={"The guests and devotees can take advantage of a spiritual library to enahance their philosophical and practical knowledge about Krishna consciousness. This unique library will constitute books of Srila Prabhupada and various acharyas in the vaishanava sampradaya."}/>
                    <Facility IMAGE={Facility8} name={"Auditorium"} desc={"The cultural fests will be conducted in a state-of-the-art auditorium with a seating capacity of more than 1000 people. The auditorium will also showcase documentaries about lives of great acharyas and pastimes of the Supreme Lord."}/>
                </Slider>
            </Stack>
        </Box>
    )
}
