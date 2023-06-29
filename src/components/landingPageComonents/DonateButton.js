import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {Button} from '@chakra-ui/react'

export default function Explore() {
    return (
        <NavLink
            exact to='/donate'
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
        </NavLink>
    )
}
