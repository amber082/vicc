
import React, {useState,useEffect} from 'react'
import {useRadio,Box,Stack, useRadioGroup, Heading, Flex, Text, FormControl, Link, Button,InputGroup, Input, InputLeftAddon} from '@chakra-ui/react'

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

    const handleInputChange = (e) => {
        let value = e.currentTarget.value 
        setAmount(value)
        setValue('0')
    }
  
    const group = getRootProps()
  
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
      <FormControl id="amount" m='5'>
            <InputGroup>
                <InputLeftAddon children='₹' bg="#2C7D42" color='#F0E6CB'/>
                <Input type="number" bg="#F0E6CB" boxShadow='xl' name='amount' value={amount} onChange={handleInputChange}/>
            </InputGroup>
        </FormControl>
        </form>
        <Link href={url} isExternal>
            <Button px='6'
                        mt='5' 
                        bg='#2C7D42' 
                        color='#F0E6CB' 
                        rounded='xl' 
                        _hover={{bg:'yellow.500', boxShadow:'3xl', color:'black'}} 
                        boxShadow='xl'      
            >
                DONATE ONLINE NOW
            </Button>
        </Link>
        </Flex>
    </Flex>
    )
  }