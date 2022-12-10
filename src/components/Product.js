import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function ProductSimple({IMAGE,name,price}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          // bg={useColorModeValue('white', 'gray.800')}
          bg='#F0E6CB'
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${process.env.REACT_APP_PROXY+IMAGE})`,
              filter: 'blur(10px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              // rounded={'lg'}
              p={'5%'}
              // height={300}
              // width={282}
              objectFit={'fill'}
              src={IMAGE}
            />
          </Box>
          <Stack  align={'center'}>
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              B.Tech IIT BHU
            </Text> */}
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={950} align='center' p={10} color='#2C7D42'>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'} >
              <Text fontWeight={500} fontSize={'sm'} align='center'>
              {price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }