import { Flex, Image, Text, Stack, Avatar } from '@chakra-ui/react';
import React from 'react'
import Prabhupada from '../assets/prabhupada.svg'
import Abhisek from '../assets/Abishek.JPG'


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

export default function About() {
    return (
      <div>
        <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-evenly' bgColor={'#F0E6CB'} mb='5%' >
            <Flex direction='column' align='flex-start' justify='space-around' m='20' data-aos='fade-down' boxSize={{base:'300',md:'450'}}>
                <Text fontSize='4xl' my='3' fontWeight='950'>
                    About The Founder Acharya <Text color='#2C7D42'>A.C. Bhaktivedanta Swami Prabhupada</Text>
                </Text>
                <Text align='justify'>
                His Divine Grace A.C. Bhaktivedanta Swami Prabhupada was a pure devotee of Lord Krishna and a bona fide spiritual master in the Gaudiya Vaishnava Sampradaya. He translated into English three major texts – Bhagavad-gita, Srimad-Bhagavatam and Sri Chaitanya Charitamrita that contain the essence of Vedic knowledge. He also wrote a number of other books that explain in detail the philosophy of Krishna consciousness.
                </Text>
            </Flex>
            <Image objectFit='fill' src={Prabhupada} boxSize={{base:'300',md:'450'}} m='20' data-aos='fade-up'></Image>
        </Flex>
        </div>
    )
}
