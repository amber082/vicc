import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import {Box, Flex, Text, Image} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon,} from "@chakra-ui/icons"
import Logo from "../assets/iskcon-logo.svg"

const MenuItems = (props) => {
    const { children, isLast, to = "#" } = props
    return (
      <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} 
        mr={{ base: 0, sm: isLast ? 8 : 14 }} 
        display="block" 
        p={{base:4,md:0}}
        fontWeight="bold"
        fontSize="lg"
      >
        <Link
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
        >
          <Text _hover={{cursor:'pointer'}}>{children}</Text>
          </Link>
      </Text>
    )
  }

export default function Navbar() {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)

    
    return (
      <Box>
        <Flex as="nav" align="center" justify="space-around" wrap="wrap" w="100%" mb={0} p={14}
        // bg="#000000"
        // opacity={'62%'}
        color="#F0E6CB"
        >
      <Flex align="left" boxSize={{base:20, md:120}}>
            <Image w="100%" h="100%" src={Logo}/>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        height={{ base: show ? "max-content" : '0', md: 'max-content' }}
        flexBasis={{ base: "100%", md: "auto" }}
        className='dropdown'
      >
        <Flex
          align="center"
          justify={{base:"center", md:"flex-end"}}
          direction={{base:"column", md:"row"}}
          pt={[2, 2, 0, 0]}
          textAlign='center'
          // background={{base:'black',md:''}}
          // opacity='50%'
          // rounded={'md'}
        >
          <MenuItems to="home">HOME</MenuItems>
          <MenuItems to="about">ABOUT US</MenuItems>
          <MenuItems to="footer" >CONTACT US</MenuItems>
          <MenuItems to="construction">CONSTRUCTION UPDATES</MenuItems> 
        </Flex>
      </Box>
    </Flex>
    
    </Box>
    
    )
}
