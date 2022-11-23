import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Meditate from '../../assets/meditate2.svg'
import Explore from './Explore'

export default function Whatwedo() {
    return (
        <div>
            <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-evenly' wrap='nowrap' mb={'10%'} >
                <div data-aos='fade-right'>
                    <Image objectFit='fill' alt='meditate' src={Meditate} boxSize='450' px={{base:'4',md:'0'}}></Image>
                </div>
                <div data-aos='fade-left'>
                    <Flex direction='column' align={{base:'center',md:'flex-start'}} justify='center' wrap='nowrap' boxSize={{base:'300',md:'450'}}>
                        <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42">
                            OUR MISSION
                        </Text>
                        <Text align={{base:'center',md:'left'}}>
                        In today’s world, there is in a dire need of reviving the value system through spiritual knowledge. India has been well-known throughout history for having the treasure of culture, values and ethics based on the scriptural roots. But in the modern times, Indian people have been misguided to forget this great treasure in their backyard and chase after so-called materialistic life that lacks any strong moral basis.
                        <br></br>
                        <br></br>
                        To rekindle the true wisdom and revive the real spirit of our human life, ISKCON Varanasi is coming up with “Vedic India Cultural Centre” which can potentially propagate spiritual knowledge to society at large, rejuvenate the cultural values to check the imbalance of values in life and achieve real unity and peace in the world.
                        </Text>
                        <Explore/>
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}
