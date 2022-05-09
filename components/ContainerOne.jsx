
import {Box, Text, Flex} from '@chakra-ui/react';
import Image from 'next/image';

import fairyMother from '../public/assets/img/fairyMother.png'

export default function ContainerOne () {

  return (

    <Flex h='100vh' bg='black' justifyContent='space-evenly' alignItems='center'>
      
    <Box boxSize='400px'>
      <Text boxSize='400px'
      fontFamily='Open Sans, sans-serif' 
      fontSize={55}
      color='white'
      >NFT: A new way to enjoy Digital Art</Text>
    </Box>

    <Box>
      <Image src={fairyMother} alt="" layout="intrinsic" width='350px' height='440px'/>
    </Box>
  
  </Flex>
 

  
  )
 
}

