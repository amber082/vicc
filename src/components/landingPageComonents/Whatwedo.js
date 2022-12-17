import { Flex, Image, Text, Box, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, Button } from '@chakra-ui/react'
import React from 'react'
import RadhaGopal from '../../assets/radhagopal.svg'
import Explore from './Explore'
import OurAcademies from './OurAcademies'


export default function Whatwedo() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
            <Flex direction={{base:'column',md:'row'}} align='center' justify='space-evenly' wrap='nowrap' mb={{base:'40%',md:'10%'}} id='about'>
                <Box data-aos='fade-right' mt={{base:'-10%',md:'0'}} mb={{base:'35%', md:'0'}} align='center'>
                    <Image objectFit='fill' alt='RadhaGopal' src={RadhaGopal} boxSize={{base:'350',md:'550'}}  px={{base:'4',md:''}}></Image>
                </Box>
                <Box data-aos='fade-left'>
                    <Flex direction='column' align={{base:'center',md:'flex-start'}} justify='center' wrap='nowrap' boxSize={{base:'320',md:'450'}}>
                        <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42">
                            OUR MISSION
                        </Text>
                        <Text align={{base:'center',md:'left'}}>
                        In today's world, there is in a dire need of reviving the value system through spiritual knowledge. India has been well-known throughout history for having the treasure of culture, values and ethics based on the scriptural roots. But in the modern times, Indian people have been misguided to forget this great treasure in their backyard and chase after so-called materialistic life that lacks any strong moral basis.
                        <br></br>
                        <br></br>
                        To rekindle the true wisdom and revive the real spirit of our human life, ISKCON Varanasi is coming up with “Vedic India Cultural Centre” which can potentially propagate spiritual knowledge to society at large, rejuvenate the cultural values to check the imbalance of values in life and achieve real unity and peace in the world.
                        </Text>
                        <Button p='6'
                                    mt='5' 
                                    bg='#F0E6CB' 
                                    color='#000' 
                                    rounded='full' 
                                    _hover={{bg:'green.700', boxShadow:'3xl', color:'white'}} 
                                    boxShadow='xl'  
                                    onClick={onOpen}      
                        >
                            EXPLORE NOW
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
                            <ModalOverlay/>
                            <ModalContent>
                                <ModalCloseButton color={'white'}/>
                                <OurAcademies/>
                            </ModalContent>
                        </Modal>
                    </Flex>
                </Box>
            </Flex>
    )
}
