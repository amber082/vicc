import { Flex, Image, Text, Stack, Avatar } from '@chakra-ui/react';
import React from 'react'
import Examsvg from '../assets/exam.svg'
import Abhisek from '../assets/Abishek.JPG'
import Howcomp from './landingPageComonents/Howcomp'
import Register from './Register'


const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex align='center' mb={5} direction={'row'}>
        <Avatar src={src} alt={name} mr={2}/>
        <Stack spacing={-1} align={'flex-start'}>
          <Text fontWeight={600} color="#233862">{name}</Text>
          <Text fontSize={'sm'} color={"#233862"}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

export default function Exam() {
    return (
      <div>
        <svg width="100%" height="100%" viewBox="0 0 722 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <rect width="722" height="79" fill="white"/>
          <path d="M0 47.8906L20.0806 50.1224C40.086 52.4007 80.2473 56.8643 120.333 63.5597C160.419 70.2086 200.581 79.0427 240.667 76.4855C280.753 73.9282 320.914 59.9795 361 56.7248C401.086 53.4701 441.247 60.9094 481.333 67.8838C521.419 74.8581 561.581 81.3675 601.667 78.9033C641.753 76.3925 681.914 64.9545 701.919 59.1891L722 53.4701V0H701.919C681.914 0 641.753 0 601.667 0C561.581 0 521.419 0 481.333 0C441.247 0 401.086 0 361 0C320.914 0 280.753 0 240.667 0C200.581 0 160.419 0 120.333 0C80.2473 0 40.086 0 20.0806 0H0V47.8906Z" fill="#012346"/>
          <path d="M0 68.8137L20.0806 65.6985C40.086 62.6298 80.2473 56.3993 120.333 51.0058C160.419 45.5658 200.581 40.9162 240.667 43.613C280.753 46.3562 320.914 56.3993 361 55.7019C401.086 55.0045 441.247 43.5665 481.333 44.078C521.419 44.6359 561.581 57.1898 601.667 57.1898C641.753 57.1898 681.914 44.6359 701.919 38.359L722 32.0821V0H701.919C681.914 0 641.753 0 601.667 0C561.581 0 521.419 0 481.333 0C441.247 0 401.086 0 361 0C320.914 0 280.753 0 240.667 0C200.581 0 160.419 0 120.333 0C80.2473 0 40.086 0 20.0806 0H0V68.8137Z" fill="#083B71"/>
          <path d="M0 26.5026L20.0806 29.6178C40.086 32.6865 80.2473 38.9169 120.333 41.9391C160.419 44.9614 200.581 44.7754 240.667 46.4957C280.753 48.2161 320.914 51.7497 361 54.1675C401.086 56.5853 441.247 57.7942 481.333 53.3771C521.419 48.96 561.581 38.9169 601.667 35.1973C641.753 31.4776 681.914 34.0814 701.919 35.4297L722 36.7316V0H701.919C681.914 0 641.753 0 601.667 0C561.581 0 521.419 0 481.333 0C441.247 0 401.086 0 361 0C320.914 0 280.753 0 240.667 0C200.581 0 160.419 0 120.333 0C80.2473 0 40.086 0 20.0806 0H0V26.5026Z" fill="#0E4E91"/>
          <path d="M0 24.6427L20.0806 23.8058C40.086 22.9224 80.2473 21.2485 120.333 19.3887C160.419 17.5289 200.581 15.4831 240.667 14.5532C280.753 13.6232 320.914 13.8092 361 17.9938C401.086 22.1785 441.247 30.3617 481.333 34.1744C521.419 37.987 561.581 37.3361 601.667 34.4068C641.753 31.4776 681.914 26.1771 701.919 23.5733L722 20.9231V0H701.919C681.914 0 641.753 0 601.667 0C561.581 0 521.419 0 481.333 0C441.247 0 401.086 0 361 0C320.914 0 280.753 0 240.667 0C200.581 0 160.419 0 120.333 0C80.2473 0 40.086 0 20.0806 0H0V24.6427Z" fill="#135EAD"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="722" height="79" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <Flex direction={{base:'column-reverse',md:'column'}} align='center' justify='space-around'>
            <Text fontSize='6xl' mt='5' fontWeight='950' color='#233862' fontFamily='sans-serif' data-aos='fade-down'>
                    ADMISSION CUM SCHOLARSHIP TEST
            </Text>
            <Register/>
            <Image objectFit='fill' src={Examsvg} w={{base:'80%',md:'30%'}} m='20' data-aos='fade-up'></Image>
            <Text fontSize='5xl' mt='5' fontWeight='800' color='#233862' fontFamily='sans-serif' data-aos='fade-down'>
                    Test Details
            </Text>
            <Flex direction={{base:'column', md:'row'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap' mt='10'>
                <Howcomp Title={"9th & 10th"} Content={"Math <br/> Science <br/> Mental Ability"}/>
                <Howcomp Title={"11th Class"} Content={"PCM /PCB"}/>
                <Howcomp Title={"Registration Fee"} Content={"₹50"}/>
                <Howcomp Title={"Exam Date"} Content={"20 September 2021"}/>
                <Howcomp Title={"Exam Mode"} Content={"Offline/ <br/> Proctored Online"}/>
            </Flex>
            <Text fontSize='5xl' mt='5' fontWeight='800' color='#233862' fontFamily='sans-serif' data-aos='fade-down'>
                    Scholarships
            </Text>
            <Flex direction={{base:'column', md:'row'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap' mt='10'>
                <Howcomp Title={"+80% Marks"} Content={"100%"}/>
                <Howcomp Title={"70-80% Marks"} Content={"75%"}/>
                <Howcomp Title={"50-70% Marks"} Content={"50%"}/>
            </Flex>
            <Text fontSize='5xl' mt='5' fontWeight='800' color='#233862' fontFamily='sans-serif' data-aos='fade-down'>
                    Cash Prizes
            </Text>
            <Flex direction={{base:'column', md:'row'}} align='center' justify='space-evenly' data-aos='fade-up' wrap='nowrap' mt='10'>
                <Howcomp Title={"Rank 1"} Content={"₹1500"}/>
                <Howcomp Title={"Rank 2"} Content={"₹1000"}/>
                <Howcomp Title={"Rank 3"} Content={"₹500"}/>
            </Flex>
        </Flex>
        </div>
    )
}
