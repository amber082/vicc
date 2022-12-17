import { Flex, Text, Box } from '@chakra-ui/react'
import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'

export default function Whatwedo() {
    return (
        <div>
            <Flex direction={{base:'column-reverse',md:'row'}} align='center' justify='space-evenly' wrap='nowrap' bg='#F0E6CB' p={'5%'}>
                <Box display={{base:'none',md:'block'}}>
                    <div data-aos='fade-right'>
                        <iframe width="840" height="473" src="https://www.youtube.com/embed/9EQ-zkk-cqI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Box>
                <Box display={{base:'block',md:'none'}} mt='50%'>
                    <div data-aos='fade-right'>
                        <iframe width="320" height="180" src="https://www.youtube.com/embed/9EQ-zkk-cqI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Box>
                <div data-aos='fade-left'>
                    <Flex direction='column' align={{base:'center',md:'flex-start'}} justify='center' wrap='nowrap' boxSize={{base:'300',md:'500'}} mt={{base:'45%', md:'0'}}>
                        <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#000000" align={'center'}>
                            GLORIES OF
                        </Text>
                        <Text fontSize={{base:'3xl',md:'5xl'}} fontWeight='950' color="#2C7D42" align={'center'}>
                            BUILDING A TEMPLE
                        </Text>
                        <Text mt={'5%'} fontSize={'md'} align={{base:'center',md:'left'}}>
                        <ImQuotesLeft/> जो भगवान विष्णु के लिए एक सुंदर मंदिर का निर्माण करता है, वह सभी पापों से मुक्त हो जाएगा और वह वैकुंठ ग्रहों में प्रवेश करेगा ।<br></br> -- नरसिंह पुराण 32.12
                        <br></br>
                        <br></br>
                        <ImQuotesLeft/>जो लोग कृष्ण के लिए एक आदमी के मंदिर के निर्माण को मंजूरी देते हैं, वे पापों से मुक्त अच्युत के क्षेत्र में जाते हैं। हरि के लिए एक मंदिर बनाने की इच्छा रखते हुए, एक व्यक्ति तुरंत अपनी लाखों पीढ़ियों, भूत और भविष्य को विष्णु के क्षेत्र में ले जाता है । <br></br> -- अग्नि पुराण 38.2-3
                        <br></br>
                        <br></br>
                        <ImQuotesLeft/>जो कोई भी विष्णु मंदिर का निर्माण या निर्माण करने में मदद करता है, वह पिता, दादा और पूर्वजों की आठ पीढ़ियों को नरक में गिरने से बचाएगा ।<br></br> -- वामन पुराण 95.38
                        </Text>
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}
