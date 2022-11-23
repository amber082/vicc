import React, {useState, useEffect} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Image} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon, ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons"
import axios from 'axios'
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
        <NavLink exact to={to} >{children}</NavLink>
      </Text>
    )
  }

export default function Navbar() {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get(process.env.REACT_APP_PROXY+'/api/category');
          setData(result.data);
          setIsLoading(false);
      };
      fetchData();
    },[])
    
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
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">HOME</MenuItems>
          <MenuItems to="/about">ABOUT US</MenuItems>
          <MenuItems to="/contact" >CONTACT US</MenuItems> 
        </Flex>
      </Box>
    </Flex>
    
    </Box>
    
    )
}
