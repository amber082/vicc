import { Flex, Text, Stack, Link, Button } from '@chakra-ui/react'
import React from 'react'
import Howcomp from './Howcomp'
import Donor from '../donationComponents/Donor'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Howwedo({DonorImage, WIDTH, slidesToShowInSlider, COLOR, Donate5, Donate1, DonateBank, DonateSq, DonateBr, DonorTitle}) {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: slidesToShowInSlider,
        slidesToScroll: 1,
        centerMode: true,
        arrows:false,
        easing:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:1000,
        vertical:true,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows:false,
                easing:true,
                accessibility:true,
                autoplay:true,
                autoplaySpeed:1000,
                vertical:true,
              }
            }]
    };
    return (
        <Flex direction='row' align='baseline' justify='space-around' p='5' wrap='nowrap' bg={'#1E592E'}>
            <Flex direction='column' align='center' justify='space-around' p='5' wrap='nowrap' boxSize={'xl'}>
                <Text fontSize={{base:'3xl',md:'4xl'}} fontWeight='900' color="#F0E6CB" data-aos='fade-down'>
                    {DonorTitle}
                </Text>
                <Stack data-aos='fade-up'>
                    <Slider {...settings} >
                        <Donor Name={'Mr. Amber Saxena'} IMAGE={DonorImage} WIDTH={WIDTH} COLOR={COLOR}/>
                        <Donor Name={'Mr. Amarjeet Sinha'} IMAGE={DonorImage} WIDTH={WIDTH} COLOR={COLOR}/>
                        <Donor Name={'Mr. Prabhash Kumar'} IMAGE={DonorImage} WIDTH={WIDTH} COLOR={COLOR}/>
                        <Donor Name={'Mr. Dhawal Krishna'} IMAGE={DonorImage} WIDTH={WIDTH} COLOR={COLOR}/>
                        <Donor Name={'Mr. Sandeep Krishna'} IMAGE={DonorImage} WIDTH={WIDTH} COLOR={COLOR}/>
                    </Slider>
                </Stack>
            </Flex>
            <Flex direction={{base:'column', md:'column'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap' mt='10' display={DonateBank}>
                <Text fontSize={{base:'3xl',md:'4xl'}} fontWeight='900' color="#F0E6CB" pb='5px' align={'center'}>
                    Bank Details
                </Text>
                <Text fontSize={{base:'3xl',md:'2xl'}} fontWeight='900' color="#F0E6CB" pb='5px' align={'center'}>
                    For Transfering Through NEFT/RTGS
                </Text>
                <Text fontSize={{base:'xl',md:'xl'}} fontWeight='900' color="#000" align={'center'}>
                    Account Name - 
                </Text>
                <Text fontSize={{base:'xl',md:'2xl'}} fontWeight='900' color="#FFFFFF" align={'center'}>
                    Isckon Project
                </Text>
                <Text fontSize={{base:'xl',md:'xl'}} fontWeight='900' color="#000" align={'center'}>
                    Account Number -
                </Text>
                <Text fontSize={{base:'xl',md:'2xl'}} fontWeight='900' color="#FFFFFF" >
                    50100325512599
                </Text>
                <Text fontSize={{base:'xl',md:'xl'}} fontWeight='900' color="#000" align={'center'}>
                    IFSC Code -
                </Text>
                <Text fontSize={{base:'xl',md:'2xl'}} fontWeight='900' color="#FFFFFF" >
                    HDFC0009454
                </Text>
                <Text fontSize={{base:'xl',md:'xl'}} fontWeight='900' color="#000" align={'center'}>
                    Branch Name -
                </Text>
                <Text fontSize={{base:'xl',md:'2xl'}} fontWeight='900' color="#FFFFFF" align={'center'}>
                    Bhelupur Varanasi
                </Text>
                <Link href='https://rzp.io/i/iTzOrf0' isExternal>
                    <Button px='6'
                                mt='5' 
                                bg='#F0E6CB' 
                                color='#000' 
                                rounded='full' 
                                _hover={{bg:'yellow.500', boxShadow:'3xl', color:'black'}} 
                                boxShadow='xl'
                                display={Donate5}        
                    >
                        Click To Donate 5 Lakhs
                    </Button>
                </Link>
                <Link href='https://rzp.io/i/bEteC5OZXK' isExternal>
                    <Button px='6'
                                mt='5' 
                                bg='#F0E6CB' 
                                color='#000' 
                                rounded='full' 
                                _hover={{bg:'yellow.500', boxShadow:'3xl', color:'black'}} 
                                boxShadow='xl'
                                display={Donate1}        
                    >
                        Click To Donate 1 Lakh
                    </Button>
                </Link>
                <Link href='https://rzp.io/l/VICC-Brick' isExternal>
                    <Button px='6'
                                mt='5' 
                                bg='#F0E6CB' 
                                color='#000' 
                                rounded='full' 
                                _hover={{bg:'yellow.500', boxShadow:'3xl', color:'black'}} 
                                boxShadow='xl'
                                display={DonateSq}        
                    >
                        Click To Donate Sq. Feet
                    </Button>
                </Link>
                <Link href='https://rzp.io/l/VICC-Sqfeet' isExternal>
                    <Button px='6'
                                mt='5' 
                                bg='#F0E6CB' 
                                color='#000' 
                                rounded='full' 
                                _hover={{bg:'yellow.500', boxShadow:'3xl', color:'black'}} 
                                boxShadow='xl'
                                display={DonateBr}        
                    >
                        Click To Donate Brick
                    </Button>
                </Link>
            </Flex>
        </Flex>
    )
}
