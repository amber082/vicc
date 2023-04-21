import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { MdOutlineLocalLibrary } from 'react-icons/md';
  import { GiTeacher } from 'react-icons/gi';
  import {GiByzantinTemple} from 'react-icons/gi'
  import {TbToolsKitchen2} from 'react-icons/tb'
  import {MdMeetingRoom} from 'react-icons/md'
  import {GiFoodTruck} from 'react-icons/gi'
  import {GiMeditation} from 'react-icons/gi'
  import {BiDonateBlood} from 'react-icons/bi'
  
  function StatsCard({ title, stat, icon, delay }) {
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        data-aos='fade-up' data-aos-delay={delay}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={'#2C7D42'}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} mb={'5%'}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'5xl'}
          py={10}
          fontWeight={'950'}>
          Proposed Budget
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'TEMPLE HALL & GARBHA GRIHA'}
            stat={'₹ 8 Crore'}
            icon={<GiByzantinTemple size={'3em'} />}
            delay={'0'}
          />
          <StatsCard
            title={'GOVINDA\'s RESTAURANT, FOOD & GIFT STALLS'}
            stat={'₹ 6 Crore'}
            icon={<GiFoodTruck size={'3em'} />}
            delay={'0'}
          />
          <StatsCard
            title={'KITCHEN & GARDEN'}
            stat={'₹ 2 Crore'}
            icon={<TbToolsKitchen2 size={'3em'} />}
            delay={'200'}
          />
          <StatsCard
            title={'SADHU NIVAS & GURUKUL'}
            stat={'₹ 4 Crore'}
            icon={<MdOutlineLocalLibrary size={'3em'} />}
            delay={'200'}
          />
          <StatsCard
            title={'BANQUET & AUDITORIUM'}
            stat={'₹ 5 Crore'}
            icon={<GiMeditation size={'3em'} />}
            delay={'400'}
          />
          <StatsCard
            title={'GUEST ROOMS & OFFICES'}
            stat={'₹ 6 Crore'}
            icon={<MdMeetingRoom size={'3em'} />}
            delay={'400'}
          />
          <StatsCard
            title={'VIDYAPEETH, LIBRARY & ACADEMIES'}
            stat={'₹ 4 Crore'}
            icon={<GiTeacher size={'3em'} />}
            delay={'600'}
          />
          <StatsCard
            title={'ANNADANA & SAMSKARA HALL'}
            stat={'₹ 5 Crore'}
            icon={<BiDonateBlood size={'3em'} />}
            delay={'600'}
          />
        </SimpleGrid>
      </Box>
    );
  }