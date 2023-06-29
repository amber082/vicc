import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import {Button} from '@chakra-ui/react'

export default function Explore() {
    return (
        <Link
            activeClass="active"
            to="donation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
        >
            <Button px='9'
                        mt='5' 
                        bg='#F0E6CB' 
                        color='#000' 
                        rounded='full' 
                        _hover={{bg:'green.700', boxShadow:'3xl', color:'white'}} 
                        boxShadow='xl'        
            >
                DONATE NOW
            </Button>
        </Link>
    )
}
