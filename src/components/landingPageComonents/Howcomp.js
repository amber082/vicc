import {
    Box,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Search2Icon, EmailIcon, ChatIcon } from '@chakra-ui/icons';
  import { GrDeliver } from 'react-icons/gr'
  
  export default function Howcomp({Title,Content}) {
    return (
        <Box
          maxW={'330px'}
          w={{base:'250px',md:'full'}}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'dark-lg'}
          rounded={'md'}
          overflow={'hidden'}
          m='6' data-aos-delay='2000'>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')} 
            align={'center'}
            bg='#E2D135'>
            {/* <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={"#E2D135"}
              p={2}
              px={3}
              color={"#0E4E90"}
              rounded={'full'}>
              Course 1
            </Text> */}
            <Stack direction={'row'} align={'center'} justify={'center'} color={"135EAD"}>
              <Text fontSize={'3xl'} fontWeight={800}>
                {Title}
              </Text>
            </Stack>
          </Stack>
  
          <Box bg={"#135EAD"} color="white" px={6} py={10} textAlign='center'>
            <Text fontWeight='800' fontSize='xl' dangerouslySetInnerHTML={{__html: Content}}>
            </Text>
  
            {/* <Button
              mt={10}
              w={'full'}
              bg={'#E2D135'}
              color={'#0E4E90'}
              rounded={'full'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'yellow.500',
              }}
              _focus={{
                bg: 'yellow.500',
              }}>
              Start your trial
            </Button> */}
          </Box>
        </Box>
    );
  }