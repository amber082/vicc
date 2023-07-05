
import React, {useState,useEffect, useCallback} from 'react'
import {useRadio,Box,Stack, useRadioGroup, Heading, Flex, Text, FormControl, FormErrorMessage, Button, Input, InputLeftAddon, useDisclosure, FormLabel, FormHelperText,InputGroup} from '@chakra-ui/react'
import useRazorpay from "react-razorpay";
import Logo from '../assets/green_logo.svg'

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          bg={'#F0E6CB'}
          borderWidth='2px'
          borderRadius='xl'
          boxShadow='md'
          _checked={{
            bg: '#2C7D42',
            color: '#F0E6CB',
            borderColor: '#F0E6CB',
          }}
          _focus={{
            boxShadow: '2xl',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  export default function Example() {
    const options = [{'key':'₹500','value':'500'}, {'key':'₹1000','value':'1000'}, {'key':'₹1500','value':'1500'}, {'key':'₹2000','value':'2000'}, {'key':'₹2500','value':'2500'}, {'key':'Custom Amount','value':'0'}]
  

    const [amount, setAmount] = useState('500')
    const [url, setUrl] = useState('https://pages.razorpay.com/VICC-payment?donation_amount=500')

    const { getRootProps, getRadioProps, setValue } = useRadioGroup({
      name: 'framework',
      defaultValue: '500',
      onChange: setAmount,
    })

    useEffect(() => {
        console.log(amount)
        setUrl('https://pages.razorpay.com/VICC-payment?donation_amount='+amount)
    },[amount])

    const handleAmountChange = (e) => {
        let value = e.currentTarget.value 
        setAmount(value)
        setValue('0')
    }
  
    const group = getRootProps()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSubmitted, setIsSubmited] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [values,setValues] = useState({
        name:'',
        phone:'',
        email:'',
        nameInvalid:false,
        phoneInvalid:false,
        emailInvalid:false,
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
        }
        setValues({
            ...values,
            [name]: value,
            [errorName]: !errorValue
        })
        setIsSubmited(false)
    }

    const Razorpay = useRazorpay();

    useEffect(() => {
      if(isSubmitted) {
        handlePayment()
      }
    }, [values])

    const handleSubmit = (e) => {
      e.preventDefault()
      let nameError = values.name.length > 0;
      let phoneError = values.phone.length > 0 && values.phone.match(/^[6-9]\d{9}$/i) ;
      let emailError = values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      setValues({
          ...values,
          nameInvalid: !nameError,
          phoneInvalid: !phoneError,
          emailInvalid: !emailError,
      })
      setIsSubmited(true)
    }

  const handlePayment = useCallback(() => {
    setIsSubmited(false)
    if( !values.nameInvalid && !values.phoneInvalid && !values.emailInvalid){

      const options = {
        key: "rzp_live_ytp7ZCwdzAjKf7",
        amount: amount*100,
        currency: "INR",
        name: "ISKCON VICC",
        description: "Custom Donation",
        image: Logo,
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: values.name,
          email: values.email,
          contact: values.phone,
        },
        notes: {
          address: "Iskcon Vicc Razorpay",
        },
        theme: {
          color: "#2C7D42",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    }
  }, [Razorpay, amount]);
  
    return (
        
    <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} mx='10%' p='5%' boxShadow={'2xl'} borderRadius={'2xl'} id='donation'>
        <Heading mb='5' fontSize={{base:'2xl',md:'4xl'}} fontWeight='920' color="#2C7D42" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'center'}} flexDirection='column'> 
            <Text color='black'>Custom </Text>
            <Text>Donation Amount</Text>
        </Heading>
      <Stack {...group} direction={{base:'column', md:'row'}}>
        {options.map((ele) => {
            const key = ele.key
            const value = ele.value
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {key}
            </RadioCard>
          )
        })}
      </Stack>
      <Flex direction={{base:'column',md:'row'}} justify={'space-around'}>
      <form>
        <FormControl id="amount" my='2'>
          <FormLabel color='#2C7D42'>Enter Amount</FormLabel>
            <InputGroup>
                <InputLeftAddon children='₹' bg="#2C7D42" color='#F0E6CB'/>
                <Input type="number" bg="#F0E6CB" boxShadow='xl' name='amount' value={amount} onChange={handleAmountChange}/>
            </InputGroup>
        </FormControl>
        <Flex direction={{base:'column',md:'row'}} justify='space-around'>
            <FormControl id="name" mr='4' isRequired isInvalid={values.nameInvalid}>
                <FormLabel color='#2C7D42'>Name</FormLabel>
                <Input type="text" bg="#F0E6CB" boxShadow='xl' name='name' value={values.name} onChange={handleInputChange}/>
                <FormErrorMessage>Name is empty</FormErrorMessage>
            </FormControl>
            <FormControl id="phone" isRequired isInvalid={values.phoneInvalid}>
                <FormLabel color='#2C7D42'>Contact No.</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+91' bg="#2C7D42"  color='#F0E6CB'/>
                    <Input type="tel" bg="#F0E6CB" boxShadow='xl' name='phone' value={values.phone} onChange={handleInputChange}/>
                </InputGroup>
                <FormHelperText>We'll never share your contact no.</FormHelperText>
                <FormErrorMessage>Contact Number is invalid or empty</FormErrorMessage>
            </FormControl>
        </Flex>
        <FormControl id="email" my='2' isRequired isInvalid={values.emailInvalid} >
            <FormLabel color='#2C7D42'>Email address</FormLabel>
            <Input type="email" bg="#F0E6CB" boxShadow='xl' name='email' value={values.email} onChange={handleInputChange}/>
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormErrorMessage>Email is invalid or empty</FormErrorMessage>
        </FormControl>
          <Button bg='#2C7D42' color='#F0E6CB'  rounded='lg' my='5' _hover={{bg:'green.700', boxShadow:'3xl'}} onClick={handleSubmit}  boxShadow='2xl'>Donate Online Now</Button>
      </form>
        </Flex>
    </Flex>
    )
  }