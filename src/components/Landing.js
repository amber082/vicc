import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Hero from './landingPageComonents/Hero'
import Whatwedo from './landingPageComonents/Whatwedo'
import Glories from './landingPageComonents/Glories'
import Ourproducts from './landingPageComonents/Ourproducts'
import Ourfacilities from './landingPageComonents/OurFacilities'
import Testimonial from './landingPageComonents/Testimonials'
import Budget from './landingPageComonents/Budget';
import About from './About'



export default function Landing() {
    useEffect(() => {
        AOS.init({duration:1000});
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
        </div>
    )
}
