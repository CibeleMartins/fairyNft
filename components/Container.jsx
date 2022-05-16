import React from 'react';
import {Flex, Box, Heading, Slide} from '@chakra-ui/react';
import Slider from './Slider/Slider';
// import styles from './Container.module.css'

import Image from 'next/image';

import fairyFlag from '../public/assets/img/fairyFlag.png'
import nft from '../public/assets/img/nft.png'
import fairyFuture from '../public/assets/img/futureFairy.png';


export default function Container (props) {

return (

  
    <Flex 
    display='flex'
    flexDir= 'column'
    justifyContent= 'space-between'>

      <Flex 
      w='100%'
      h='700px'
      alignItems='center'
      justifyContent='space-between'
      >

        <Box
        w='40%'
        h='200px'
        fontSize={35}
        fontWeight='light'
        letterSpacing='4px'
        mt={30}
        ml={12}
        color='aliceblue'>
        NFT: A new way to enjoy Digital Art
        </Box>

        <Box
        w='200px'
        mt={30} 
        mr={24}
        >

          <Image
          src={fairyFlag}>
          
          </Image>
          
        </Box>

      </Flex>


      <Flex 
      w='100%'
      alignItems='center'
      justifyContent='space-between'>

        <Box
        w='40%'
        h='200px'
        fontSize={30}
        fontWeight='light'
        letterSpacing='4px'
        ml={12}
        color='aliceblue'>
        Non-fungible, more or less means that it’s unique 
        </Box>

        <Box
        w='35%'
        mb={20}
        mr={8}
        >

          <Image
          src={nft}>
          </Image>
          
        </Box>

      </Flex>


      <Flex 
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      bg='black'>

        <Box
        w='40%'
        h='200px'
        fontSize={30}
        fontWeight='light'
        letterSpacing='4px'
        ml={12}
        mt={10}
        color='aliceblue'>
          It's generaand can’t be replaced with something else. 
        </Box>

        <Box
        w='35%'
        mt={20}
        mb={20}
        mr={8}
        >

          <Image
          src={nft}>
          </Image>
          
        </Box>

      </Flex>

      <Flex 
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      bg='black'>

        <Box
        w='40%'
        h='200px'
        fontSize={30}
        fontWeight='light'
        letterSpacing='4px'
        ml={12}
        mt={10}
        color='aliceblue'>
        Can be built like croptocurrencies, but not traded with each other.
        </Box>

        <Box
        w='40%'
        mt={20}
        mb={20}
        
        >

          <Image
          src={fairyFuture}>
          </Image>
          
        </Box>

      </Flex>

      
      <Flex
       w='100%'
       display='flex'
       alignItems= 'center'
       justifyContent= 'space-between'
       bg= 'black'>

        <Box
        w='40%'
        h='200px'
        fontSize={80}
        fontWeight='light'
        letterSpacing='4px'
        ml={12}
        mt={90}
        color='aliceblue'>
        FAIRIES NFT
        </Box>

        <Slider></Slider>

      

      </Flex>

      <Flex 
      w='100%'
      alignItems='center'
      bg='black'
      flexDirection='column'>

        <Heading
        id='#about-us'
        mr={600}
        mt={40}
        fontSize={35}
        color='aliceblue'
        fontWeight='light'
        letterSpacing='4px'
        borderBottom='1px solid'
        padding={5}>
          About Us
        </Heading>
        

        <Box
        w='80%'
        fontSize={30}
        fontWeight='light'
        letterSpacing='4px'
        mt={20}
        color='aliceblue'
        textAlign='center'>
        The First PVP game for the NFT Universe.
        We are platform (PC+ Mobile) PvP fairies game where holders of different NFT collections can play with each other to both and earn rewards through our play mechanics.
        </Box>

        <Box
        w='80%'
        h='40%'
        fontSize={30}
        mt={20}
        color='aliceblue'
        textAlign='center'
        fontWeight='light'
        letterSpacing='4px'>
        We are in the launch phase, soon all fairies will be available for purchase.
        </Box>
     

      </Flex>


    </Flex>

    
  )


}