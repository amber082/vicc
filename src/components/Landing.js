import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Hero from './landingPageComonents/Hero'
import Whatwedo from './landingPageComonents/Whatwedo'
import Glories from './landingPageComonents/Glories'
import Ourproducts from './landingPageComonents/Ourproducts'
import Ourfacilities from './landingPageComonents/OurFacilities'
import Budget from './landingPageComonents/Budget';
import Donation from './DonationComp'
import About from './About'
import Construction from './landingPageComonents/Construction'
import DonationImage from '../assets/donation1.svg'
import TempleMock from './landingPageComonents/TempleMock'



export default function Landing() {
    useEffect(() => {
        AOS.init({duration:1000});
        AOS.refresh();
      }, []);
    return (
        <div>
            <Hero/>
            <Whatwedo/>
            <About/>
            <Ourproducts/>
            <Ourfacilities/>
            <Glories/>
            <Budget/>
            <Donation/>
            <Construction/>
            <TempleMock/>
        </div>
    )
}
