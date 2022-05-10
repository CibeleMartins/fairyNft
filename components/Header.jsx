import { useRef } from 'react'
import {VStack, HStack, Box, Text, useDisclosure, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../public/assets/img/logo.png'

export default function Header (props) {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const btnfRef= useRef()

  return (

    <>

      <VStack w='100%' h='80px' bg='black'>

        <HStack 
        w= '100%' 
        h='80px'
        justifyContent='space-between'>

          <Box 
          w='100px'
          h='90px'
          ml={8}
          mb={3}>

            <Image
            src={logo}
            alt='logo'>
            </Image>

          </Box>

          <Flex
          w='500px'
          h='90px'
          ml={8}
          alignItems='center'
          justifyContent= 'space-evenly'
          fontSize={15} 
          >
            
            <Text>HOME</Text>
            <Text>ABOUT</Text>
            <Text>CONTACT</Text>

      
          </Flex>


        </HStack>

      </VStack>

    </>
    
  )


}