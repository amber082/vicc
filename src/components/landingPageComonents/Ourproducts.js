import React, {useState, useEffect} from 'react'
import Activity1 from '../../assets/activity1.png'
import Activity2 from '../../assets/activity2.png'
import Activity3 from '../../assets/activity3.png'
import Activity4 from '../../assets/activity4.png'
import Activity5 from '../../assets/activity5.png'
import Product from '../Product'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Flex, Stack, Text, Box } from '@chakra-ui/layout';
import Explore from './Explore'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default function Ourproducts() {
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(true);

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        arrows:true,
        easing:true,
        accessibility:true,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                className: "center",
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows:false,
                easing:true,
                accessibility:true,
                autoplay:true,
                autoplaySpeed:3000,
              }
            }]
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(process.env.REACT_APP_PROXY+'/api/landproducts');
            setData(result.data);
            setIsLoading(false);
        };
        fetchData();
    },[])

    return (
        <Box mb='5%'>
            <Flex direction='column' align='center' justify='center' m='5' data-aos='fade-down'>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#000000">
                    Activities At
                </Text>
                <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42">
                    Vedic India Cultural Center
                </Text>
            </Flex>
            <Stack mb='5' data-aos='fade-up'>
                <Slider {...settings} >
                    <Product IMAGE={Activity1} name={"Daily Arati For Sri Sri Radha Gopal"} price={"Daily Aratis witness hundreds of devotees blissfully participating in kirtans and they take the beautiful Darshan of the Divine Lordships."}/>
                    <Product IMAGE={Activity2} name={"Daily Classes Based On Scriptures"} price={"By the process of hearing Srimad-Bhagavatam one can attain the highest perfection of life."}/>
                    <Product IMAGE={Activity3} name={"Cultural & Spiritual Program For Kids & Congregation"} price={"Kids are trained in moral values and cultural activities in weekly “SAMSKRITI” fun school. Congregation families come together to serve the Lord."}/>
                    <Product IMAGE={Activity4} name={"Value Education & Skill Development For Youth"} price={"Youth welfare centers in Varanasi and Prayagraj cater to the academic and spiritual training of around 300 youth."}/>
                    <Product IMAGE={Activity5} name={"Food For Life: Prasadam Distribution"} price={"Food for Life at ISKCON Varanasi provides free healthy and sumptuous prasadam for all the visitors & guests."}/>
                </Slider>
            </Stack>
            <Flex direction='row' align='center' justify='center' m='8'>
                <Explore/>
            </Flex>
        </Box>
    )
}
