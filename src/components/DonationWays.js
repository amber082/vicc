import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Image } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import upi from '../assets/iskcon_upi.jpg'
import Explore from './landingPageComonents/Explore'

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
        <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} m={'5%'}>
        <Heading mb='5' fontSize={{base:'2xl',md:'4xl'}} fontWeight='920' color="#2C7D42" letterSpacing='1px' display='flex' alignItems={{base:'center',md:'center'}} flexDirection='column'> 
            <Text color='black'>Different Ways</Text>
            <Text>To Donate</Text>
        </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
      <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                <Icon as={FcDonate} w={10} h={10} />  
            </Flex>
            <Text fontWeight={600}>Seva Opportunities & Custom Donation</Text>
            <Text color={'gray.600'}>You can contribute by opting for one or more of the given seva opportunities and become the respective sevak. Please contact us after making the donation by any of the means given in contact us section</Text>
            <Text color={'gray.600'}>You can also contribute by making the custom donation of any amount you like.</Text>
            <Explore/>
        </Stack>
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                <Icon as={FcDonate} w={10} h={10} />    
            </Flex>
            <Text fontWeight={600}>Bank Transfer Through NEFT/RTGS</Text>
                <Flex direction={'row'}>
                    <Text   color="#000" >Account Name - </Text>
                    <Text   color="gray.600" >ISKCON Project</Text>
                </Flex>
                <Flex direction={'row'}>
                    <Text  color="#000" >Account Number -</Text>
                    <Text   color="gray.600" >50100325512599</Text>
                </Flex>
                <Flex direction={'row'}>
                    <Text  color="#000" >IFSC Code -</Text>
                    <Text   color="gray.600" >HDFC0009454</Text>
                </Flex>
                <Flex direction={'row'}>
                    <Text  color="#000" >Branch Name -</Text>
                    <Text   color="gray.600" >Bhelupur Varanasi</Text>
                </Flex>
        </Stack>
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                <Icon as={FcDonate} w={10} h={10} />    
            </Flex>
            <Text fontWeight={600}>Pay Using UPI</Text>
            <Image src={upi} w='50%'></Image>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}