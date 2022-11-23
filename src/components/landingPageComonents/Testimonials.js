import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
} from '@chakra-ui/react';
import Aman from '../../assets/Aman.jpeg'
import Arman from '../../assets/Arman.jpg'
import Yash from '../../assets/Yash.jpeg'
import Gokul from '../../assets/Gokul.jpg'

const Testimonial = ({ children ,delay }) => {
  return <Box data-aos='fade-up' data-aos-delay={delay}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={"#135EAD"}
      boxShadow={'2xl'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: "#135EAD",
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} color="#E2D135">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={"white"}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} color="#233862">{name}</Text>
        <Text fontSize={'sm'} color={"#233862"}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={'white'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} data-aos='fade-down'>
          <Heading color="#233862">Our Students Speak</Heading>
          <Text color="#233862" textAlign='center'>Transforming Efforts Into Results</Text>
        </Stack >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }} >
          <Testimonial delay='0'>
            <TestimonialContent>
              <TestimonialHeading>Helpful Teachers</TestimonialHeading>
              <TestimonialText>
              I credit Shivam Sir for my admission to IIT Kgp. Uncertain of what to do,  I always approached Sir. |I trusted him with his ways. Besides this, his classes were very interesting. He could pay equal attention to everybody. His doubt solving skills are remarkable. His inspiring talks in the class were more than refreshment. His counselling helped me get through my repeating year peacefully without any hassles.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Aman}
              name={'Bhokarikar Rugved Shailesh'}
              title={'EE Adv - 1776, IIT KGP, Electrical, IDD'}
            />
          </Testimonial>
          <Testimonial delay='300'>
            <TestimonialContent>
              <TestimonialHeading>Inquisitive Environment</TestimonialHeading>
              <TestimonialText>
              I have learned so much in my classes with Aman Sir. He paces the class just right so you feel challenged but not overwhelmed. So many other classes you just read from a text book but in his classes Aman Sir asks questions and gets the students to respond which is both fun and promotes faster learning. He is patient and eager to help. I’m thrilled to have found his class!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Gokul}
              name={'Gokul Patel'}
              title={'Adv- 6447 AIR, IIT BHU, Electrical'}
            />
          </Testimonial>
          <Testimonial delay='600'>
            <TestimonialContent>
              <TestimonialHeading>Excellent Skills</TestimonialHeading>
              <TestimonialText>
              Whenever I felt my confidence sliding, I would always go to Rohit Sir. After talking to him, | would feel rejuvenated and full of vigour to strive for the best. He is a true genius and more importantly an amazing teacher. Every mark scored in chemistry is because of sir's guidance and inspiration. 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={Yash}
              name={'Himanshu S B'}
              title={'JEE Adv - 3520, IIT KGP, Industrial'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}