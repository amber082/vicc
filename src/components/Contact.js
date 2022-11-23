import { Flex, Text, FormControl, FormLabel, Button, FormHelperText,InputGroup, Input, InputLeftAddon , Textarea, Image, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import React, {useState} from 'react'
import {PhoneIcon,EmailIcon} from '@chakra-ui/icons'
import  {IoLocationSharp} from 'react-icons/io5'
import Contactsvg from '../assets/contact.svg'
import axios from 'axios'
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
        <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-around' mt='10'>
            <Flex direction='column' align='flex-start' justify='space-around' m='5' p='5' bg="#135EAD" color='white' rounded='2xl' boxShadow='2xl' data-aos='fade-right'>
                <Text fontSize='2xl' my='3' fontWeight='semibold'>Contact Information</Text>
                <Text my='2'> <PhoneIcon/> +91 9554365926 / +91 7522047134 </Text>
                <Text my='2'> <EmailIcon/> contact.smartacad@gmail.com </Text>
                <Text my='2'> <IoLocationSharp className='location'/> Near Merry City Public School, B.H.U Bye Pass Road,<br/> Narayanpur, Dafi, Varanasi, Uttar Pradesh - 221011 </Text>
            </Flex>
            <Flex direction='column' align='flex-start' justify='space-around' color='white' data-aos='fade-left'>
                <Text fontSize='5xl' my='3' fontWeight='semibold' color='blue.800'>Contact Us</Text>
                <form>
                    <Flex direction={{base:'column',md:'row'}} justify='space-around'>
                        <FormControl id="name" mr='4' isRequired isInvalid={values.nameInvalid}>
                            <FormLabel color='#135EAD'>Name</FormLabel>
                            <Input type="text" bg="#135EAD" boxShadow='xl' name='name' value={values.name} onChange={handleInputChange}/>
                            <FormErrorMessage>Name is empty</FormErrorMessage>
                        </FormControl>
                        <FormControl id="phone" isInvalid={values.phoneInvalid}>
                            <FormLabel color='#135EAD'>Contact No.</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+91' bg="#135EAD"/>
                                <Input type="tel" bg="#135EAD" boxShadow='xl' name='phone' value={values.phone} onChange={handleInputChange}/>
                            </InputGroup>
                            <FormHelperText>We'll never share your contact no.</FormHelperText>
                            <FormErrorMessage>Contact Number is invalid</FormErrorMessage>
                        </FormControl>
                    </Flex>
                    <FormControl id="email" my='2' isRequired isInvalid={values.emailInvalid} >
                        <FormLabel color='#135EAD'>Email address</FormLabel>
                        <Input type="email" bg="#135EAD" boxShadow='xl' name='email' value={values.email} onChange={handleInputChange}/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        <FormErrorMessage>Email is invalid or empty</FormErrorMessage>
                    </FormControl>
                    <FormControl id="req" isRequired isInvalid={values.reqInvalid} >
                        <FormLabel color='#135EAD'>Requirements</FormLabel>
                        <Textarea bg="#135EAD" boxShadow='xl' name='req' value={values.req} onChange={handleInputChange}/>
                        <FormErrorMessage>Requirements should be in greater than 10 characters</FormErrorMessage>
                    </FormControl>
                    <Button bg='#E2D135' color='#0E4E90'  rounded='lg' my='5' _hover={{bg:'green.700', boxShadow:'3xl'}} onClick={handleSubmit}  boxShadow='2xl' >Submit</Button>
                </form>
            </Flex>
        </Flex>
        <Flex direction='column' align='center'>
            <Image objectFit='fill' src={Contactsvg} w={{base:'80%',md:'60%'}}></Image>
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
