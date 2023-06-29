import React, {useEffect} from 'react'
import About from './About'
import Whatwedo from './landingPageComonents/Whatwedo'
import AOS from 'aos';

export default function AboutUs() {

    useEffect(() => {
        AOS.init({duration:1000});
        AOS.refresh();
      },[])

  return (<div>
    <Whatwedo/>
    <About/>
  </div>
  )
}
