import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@chakra-ui/react'

export default function Explore() {
    return (
        <Link to='/'>
            <Button px='6'
                        mt='5' 
                        bg='#F0E6CB' 
                        color='#000' 
                        rounded='full' 
                        _hover={{bg:'green.700', boxShadow:'3xl', color:'white'}} 
                        boxShadow='xl'        
            >
                EXPLORE NOW
            </Button>
        </Link>
    )
}
