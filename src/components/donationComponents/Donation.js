import React from 'react'
import {Box, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import Howwedo from '../landingPageComonents/Howwedo'

export default function Donation({IMAGE, size, DonorImage, WIDTH, slidesToShowInSlider, COLOR, Donate5, Donate1, DonateBank, DonateSq, DonateBr, DonorTitle}) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
            <Box py={{base:'2%', md:'0'}}>
                <Image src={IMAGE} layout='fill' onClick={onOpen} boxSize={size} _hover={{cursor:'pointer', boxShadow:'2xl'}} rounded='full'></Image>
                <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalCloseButton color={'white'}/>
                        <Howwedo DonorImage={DonorImage} WIDTH={WIDTH} slidesToShowInSlider={slidesToShowInSlider} COLOR={COLOR} Donate5={Donate5} Donate1={Donate1} DonateBank={DonateBank} DonateSq={DonateSq} DonateBr={DonateBr} DonorTitle={DonorTitle}/>
                    </ModalContent>
                </Modal>
            </Box>
    )
}
