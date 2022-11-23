import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@chakra-ui/react'

export default function Register() {
    return (
        <Link to='/register'>
            <Button px='6'
                        mt='5' 
                        bg='#E2D135' 
                        color='#0E4E90' 
                        rounded='full' 
                        _hover={{bg:'yellow.500', boxShadow:'3xl'}} 
                        boxShadow='xl'
                        size='lg'
            >
                Register NOW
            </Button>
        </Link>
    )
}
