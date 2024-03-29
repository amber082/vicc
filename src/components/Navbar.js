import React, {useEffect} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Box, Flex, Text, Image} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon,} from "@chakra-ui/icons"
import Logo from "../assets/iskcon-logo.svg"
import GreenLogo from "../assets/green_logo.svg"

const MenuItemsScrollable = (props) => {
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
    const [isHome, setIsHome] = React.useState(true)
    const location = useLocation();

    const [stickyClass, setStickyClass] = React.useState(false);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);

      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 700 ? setStickyClass(true) : setStickyClass(false);
      }
    };

    useEffect(() => {
      location.pathname == '/' || location.pathname == '/donate' ? setIsHome(true) : setIsHome(false)
    },[location])

    
    return (
      <Box mb={stickyClass ? '22vh' : '0'}>
        <Flex as="nav" align="center" justify="space-around" wrap="wrap" w="100%" mb={0} p={14}
        // bg="#000000"
        // opacity={'62%'}
        color={isHome ? (!stickyClass ? "#F0E6CB" : "#2C7D42") : "#2C7D42"}
        position={{md: stickyClass ? 'relative' : 'relative'}}
        backgroundColor={stickyClass ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.0)" } backdropFilter={"saturate(180%) blur(5px)"}
        zIndex={'200'}
        >
      <Flex align="left" boxSize={{base:20, md:120}}>
        <NavLink exact to='/'>
            {isHome ? (!stickyClass ?
            <Image w="100%" h="100%" src={Logo}/> : <Image w="100%" h="100%" src={GreenLogo}/>)
            : <Image w="100%" h="100%" src={GreenLogo}/>
            }
        </NavLink>
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
          <MenuItems to="/">HOME</MenuItems>
          <MenuItems to="/about">ABOUT US</MenuItems>
          <MenuItemsScrollable to="footer" >CONTACT US</MenuItemsScrollable>
          <MenuItems to="/construction">CONSTRUCTION UPDATES</MenuItems>
          <MenuItems to="/donate">DONATE</MenuItems> 
        </Flex>
      </Box>
    </Flex>
    
    </Box>
    
    )
}
