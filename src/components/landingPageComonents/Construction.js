import React, {useEffect} from 'react'
import Construct1 from '../../assets/construct1.jpeg'
import Construct2 from '../../assets/construct2.jpeg'
import Construct3 from '../../assets/construct3.jpeg'
import Construct4 from '../../assets/construct4.jpeg'
import Construct5 from '../../assets/construct5.jpeg'
// import ConstructVid from '../../assets/constructvid1.mp4'
import Construct from '../Construct'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Flex, Stack, Text, Box, AspectRatio } from '@chakra-ui/layout';
import Explore from './Explore'
import AOS from 'aos';


export default function Ourproducts() {

    useEffect(() => {
        AOS.init({duration:1000});
        AOS.refresh();
      },[])

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
                    <Construct IMAGE={Construct5} />
                </Slider>
            </Stack>
            <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
                ISKCON VICC Construction updates: The demolition work has been completed & temple foundation is being laid
            </Text>
            <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
                the construction officially starts today.
            </Text>
            <Flex direction='column' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42" align={'center'}>
                    Temple Mockups
                </Text>
            </Flex>
            <Stack mb='5%' data-aos='fade-up'>
                <Slider {...settings} >
                    <AspectRatio maxWidth={840} ratio={1.7} mt='7%'>
                        <iframe title='Temple Mockup' src='https://res.cloudinary.com/dkgi3vzew/video/upload/v1688049604/zxfixdyndzehsdwyo69u.mp4' allowFullScreen/>
                    </AspectRatio>
                    <AspectRatio maxWidth={840} ratio={1.7} mt='7%'>
                        <iframe title='Temple Mockup' src='https://res.cloudinary.com/dkgi3vzew/video/upload/v1688049604/tjyznjmk8yztr5g1cox1.mp4' allowFullScreen/>
                    </AspectRatio>
                    <AspectRatio maxWidth={840} ratio={1.7} mt='7%'>
                        <iframe title='Temple Mockup' src='https://res.cloudinary.com/dkgi3vzew/video/upload/v1688049602/n3qo50pu7dpb91iu3lol.mp4' allowFullScreen/>
                    </AspectRatio>
                </Slider>
            </Stack>
        </Box>
    )
}
