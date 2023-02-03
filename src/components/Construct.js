import {
    Box,
    Center,
    Image,
    useColorModeValue
  } from '@chakra-ui/react';
  
  export default function Construct({IMAGE}) {
    return (
      <Center py={6}>
        <Box
          maxW={'90%'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Box
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={0}
            pos={'relative'}>
            <Image
              src={
                IMAGE
              }
              layout={'fill'}
            />
          </Box>
        </Box>
      </Center>
    );
  }