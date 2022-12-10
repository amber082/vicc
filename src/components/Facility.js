import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

export default function Facility({IMAGE,name,desc}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
        //   h={'100'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              IMAGE
            }
            layout={'fill'}
          />
        </Box>
        <Stack >
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Facility
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>
            {desc}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}