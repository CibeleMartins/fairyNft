import React from 'react';
import {Flex, Box} from '@chakra-ui/react';
import Image from 'next/image';
import fairyMother from '../public/assets/img/fairyMother.png'
import nft from '../public/assets/img/nft.png'
import fairyFuture from '../public/assets/img/futureFairy.png';
import warrior from '../public/assets/img/warriorFairy.png';


export default function Container (props) {

  return (

  
   <Flex
   flexDirection='column'
   justifyContent='space-between'>

      <Flex 
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      >

        <Box
        w='40%'
        h='200px'
        fontSize={35}
        ml={10}
        mb={40}
        color='aliceblue'>
        NFT: A new way to enjoy Digital Art
        </Box>

        <Box
        w='280px'
        mb={40}
        mr={20}
        >

          <Image
          src={fairyMother}>
          
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
        ml={10}
        mt={10}
        color='aliceblue'>
        Non-fungible, more or less means that it’s unique 
        </Box>

        <Box
        w='350px'
        mt={20}
        mb={20}
        mr={10}
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
        ml={10}
        mt={10}
        color='aliceblue'>
          It's generaand can’t be replaced with something else. 
        </Box>

        <Box
        w='350px'
        mt={20}
        mb={20}
        mr={10}
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
        ml={10}
        mt={10}
        color='aliceblue'>
        Can be built like croptocurrencies, but not traded with each other.
        </Box>

        <Box
        w='420px'
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
      alignItems='center'
      justifyContent='space-between'
      bg='black'>

        <Box
        w='40%'
        h='200px'
        fontSize={60}
        ml={10}
        mt={40}
        color='aliceblue'>
        FAIRIES NFT
        </Box>

        <Box
        w='420px'
        mt={20}
        mb={20}
        mr={10}
        >

          <Image
          src={warrior}>
          </Image>
          
        </Box>

      </Flex>

    </Flex>
  
  )


}