import { Box, Flex, Text } from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Donation from './donationComponents/Donation'
import DonationImage1 from '../assets/donation1.svg'
import DonationImage2 from '../assets/donation2.svg'
import DonationImage3 from '../assets/donation3.svg'
import DonationImage4 from '../assets/donation4.svg'
import DonationImage5 from '../assets/donation5.svg'
import DonationImage6 from '../assets/donation6.svg'
import DonationImage7 from '../assets/donation7.svg'
import DonationImage8 from '../assets/donation8.svg'
import DonationImage9 from '../assets/donation9.svg'
import Donor1 from '../assets/donor1.svg'
import Donor2 from '../assets/donor2.svg'
import Donor3 from '../assets/donor3.svg'
import Donor4 from '../assets/donor4.svg'
import Donor5 from '../assets/donor5.svg'
import Donor6 from '../assets/donor6.svg'
import Donor7 from '../assets/donor7.svg'
import Donor8 from '../assets/donor8.png'
import Donor9 from '../assets/donor9.svg'
import AOS from 'aos';


export default function DonationComp() {

  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  },[])

  return (
    <Box id='donation'>
        <Flex direction={{base:'column',md:'column'}} align='center' justify='center' m='5' data-aos='fade-down'>
            <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#000000" align={'center'}>
                Seva
            </Text>
            <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42" align={'center'}>
                Opportunities
            </Text>
            {/* <Text fontSize={{base:'md',md:'xl'}} fontWeight='950' color="#000000" align={'center'}>
                Click To Donate
            </Text> */}
        </Flex>
        <Flex direction={{base:'column',md:'row'}} justifyContent={'space-evenly'} alignItems={'center'} px='10%' data-aos='fade-up'>
            <Donation IMAGE={DonationImage1} size={'300'} DonorImage={Donor1} WIDTH={'250px'} slidesToShowInSlider={4} COLOR={'black'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Sri Sri Radha Gopal Sevaks'}/>
            <Donation IMAGE={DonationImage2} size={'280'} DonorImage={Donor2} WIDTH={'250px'} slidesToShowInSlider={4} COLOR={'black'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Sri Sri Gaur Nitai Sevaks'}/>
            <Donation IMAGE={DonationImage3} size={'250'} DonorImage={Donor3} WIDTH={'400px'} slidesToShowInSlider={3} COLOR={'black'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Srila Praphupada Sevaks'}/>
            <Donation IMAGE={DonationImage4} size={'230'} DonorImage={Donor4} WIDTH={'300px'} slidesToShowInSlider={3} COLOR={'black'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Goloka Sevaks'}/>
        </Flex>
        <Flex direction={{base:'column',md:'row'}} justifyContent={'space-evenly'} alignItems={'center'} px='10%' py='2%' data-aos='fade-up'>
            <Donation IMAGE={DonationImage5} size={'200'} DonorImage={Donor5} WIDTH={'250px'} slidesToShowInSlider={1} COLOR={'white'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Room Sponsors'}/>
            <Donation IMAGE={DonationImage6} size={'180'} DonorImage={Donor6} WIDTH={'400px'} slidesToShowInSlider={3} COLOR={'black'} Donate5={'block'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Vaikuntha Sevaks'}/>
            <Donation IMAGE={DonationImage7} size={'170'} DonorImage={Donor7} WIDTH={'400px'} slidesToShowInSlider={2} COLOR={'black'} Donate5={'none'} Donate1={'block'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'none'} DonorTitle={'Sudama Sevaks'}/>
            <Donation IMAGE={DonationImage8} size={'160'} DonorImage={Donor8} WIDTH={'250px'} slidesToShowInSlider={2} COLOR={'black'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'flex'} DonateBr={'none'} DonorTitle={'Square Feet Sponsors'}/>
            <Donation IMAGE={DonationImage9} size={'150'} DonorImage={Donor9} WIDTH={'250px'} slidesToShowInSlider={3} COLOR={'white'} Donate5={'none'} Donate1={'none'} DonateBank={'flex'} DonateSq={'none'} DonateBr={'flex'} DonorTitle={'Brick Sponsors'}/>
        </Flex>
        <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
            Golden Brick: Name will be embedded on the brick at the lotus feet of Sri Sri Radha Gopal
        </Text>
        <Text fontSize={{base:'md',md:'xl'}} fontWeight='900' align='center' justify='center' m='2' data-aos='fade-down'>
            Wall of Fame: Name will be embedded on the "Wall of Devotional Fame" in the temple
        </Text>
    </Box>
  )
}
