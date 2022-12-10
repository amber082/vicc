import { Flex, Text, FormControl, FormLabel, Button, FormHelperText,InputGroup, Input, InputLeftAddon , Textarea, Image, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import React, {useState} from 'react'
import {PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import  {IoLocationSharp} from 'react-icons/io5'
import Contactsvg from '../assets/contact.svg'
import Success from './ContactSuccess'
import Error from './ContactError'
import emailjs from 'emailjs-com';



export default function Contact() {

    const serviceID = 'default_service';
    const templateID = 'template_ug2toaj';
    const userID = 'user_r6iQ2Fbh3pO65E7RO8Y1K'
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSuccess, setIsSuccess] = useState(false)
    const [values,setValues] = useState({
        name:'',
        phone:'',
        email:'',
        req:'',
        nameInvalid:false,
        phoneInvalid:false,
        emailInvalid:false,
        reqInvalid:false,
    })

    const handleInputChange = (e) => {
        let name = e.currentTarget.name
        let value = e.currentTarget.value 
        let errorName = e.currentTarget.name + "Invalid"
        let errorValue = false
        switch(name){
            case 'name':
                errorValue = value.length > 0;
                break;
            case 'phone':
                errorValue = value.length > 0 ? value.match(/^[6-9]\d{9}$/i) : true;
                break;
            case 'email':
                errorValue = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'req':
                errorValue = value.length >= 10;
                break;
        }
        setValues({
            ...values,
            [name]: value,
            [errorName]: !errorValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let nameError = values.name.length > 0;
        let phoneError = values.phone.length > 0 ? values.phone.match(/^[6-9]\d{9}$/i) : true;
        let emailError = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        let reqError = values.req.length >= 10;
        setValues({
            ...values,
            nameInvalid: !nameError,
            phoneInvalid: !phoneError,
            emailInvalid: !emailError,
            reqInvalid: !reqError
        })
        if( !values.nameInvalid && !values.phoneInvalid && !values.emailInvalid && !values.reqInvalid){
            emailjs.send(serviceID, templateID, values, userID)
                .then((result) => {
                    console.log(result.text);
                    setIsSuccess(true)
                    onOpen()
                }, (error) => {
                    console.log(error.text);
                    setIsSuccess(false)
                    onOpen()
                });
            }
    }


    return (
        <div>
        <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-around' pt='10' bg='#1E592E'>
            <Flex direction='column' align='flex-start' justify='space-around' m='5' p='5' bg="#F0E6CB" color='black' rounded='2xl' boxShadow='2xl' data-aos='fade-right'>
                <Text fontSize='2xl' my='3' fontWeight='semibold'>Contact Information</Text>
                <Text my='2'> <PhoneIcon/> +91 7505335674 </Text>
                <Text my='2'> <EmailIcon/> contact.iskconvaranasi@gmail.com </Text>
                <Text my='2'> <IoLocationSharp className='location'/> B 27/80, Durgakund Road, Bhelupur, Varanasi, Uttar Pradesh - 221010 </Text>
            </Flex>
            <Flex direction='column' align='flex-start' justify='space-around' color='black' data-aos='fade-left'>
                <Text fontSize='5xl' my='3' fontWeight='semibold' color='#F0E6CB'>Contact Us</Text>
                <form>
                    <Flex direction={{base:'column',md:'row'}} justify='space-around'>
                        <FormControl id="name" mr='4' isRequired isInvalid={values.nameInvalid}>
                            <FormLabel color='#F0E6CB'>Name</FormLabel>
                            <Input type="text" bg="#F0E6CB" boxShadow='xl' name='name' value={values.name} onChange={handleInputChange}/>
                            <FormErrorMessage>Name is empty</FormErrorMessage>
                        </FormControl>
                        <FormControl id="phone" isInvalid={values.phoneInvalid}>
                            <FormLabel color='#F0E6CB'>Contact No.</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+91' bg="#F0E6CB"/>
                                <Input type="tel" bg="#F0E6CB" boxShadow='xl' name='phone' value={values.phone} onChange={handleInputChange}/>
                            </InputGroup>
                            <FormHelperText>We'll never share your contact no.</FormHelperText>
                            <FormErrorMessage>Contact Number is invalid</FormErrorMessage>
                        </FormControl>
                    </Flex>
                    <FormControl id="email" my='2' isRequired isInvalid={values.emailInvalid} >
                        <FormLabel color='#F0E6CB'>Email address</FormLabel>
                        <Input type="email" bg="#F0E6CB" boxShadow='xl' name='email' value={values.email} onChange={handleInputChange}/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        <FormErrorMessage>Email is invalid or empty</FormErrorMessage>
                    </FormControl>
                    <FormControl id="req" isRequired isInvalid={values.reqInvalid} >
                        <FormLabel color='#F0E6CB'>Requirements</FormLabel>
                        <Textarea bg="#F0E6CB" boxShadow='xl' name='req' value={values.req} onChange={handleInputChange}/>
                        <FormErrorMessage>Requirements should be in greater than 10 characters</FormErrorMessage>
                    </FormControl>
                    <Button bg='#F0E6CB' color='#black'  rounded='lg' my='5' _hover={{bg:'green.700', boxShadow:'3xl'}} onClick={handleSubmit}  boxShadow='2xl' >Submit</Button>
                </form>
            </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton/>
                {isSuccess? <Success/> : <Error/>}
            </ModalContent>
        </Modal>
        </div>
    )
}
