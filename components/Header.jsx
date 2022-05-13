import {VStack, HStack, Box, Text, Flex, Button} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/Link';
import logo from '../public/assets/img/logo.png'
import breakpoints from '../pages/breakpoints';

export default function Header (props) {

  return (

    <>

      <VStack w='100%' h='110px' bg='black'>

        <HStack 
        w= '100%' 
        h='110px'
        justifyContent='space-between'>

          <Box 
          w='130px'
          h='100px'
          ml={5}
          mb={14}>

            <Image
            src={logo}
            alt='logo'
            >
            </Image>

          </Box>

          <Flex
          w='400px'
          h='40px'
          bg='black'     
          justifyContent= 'space-evenly'
          fontSize={13}
          color='aliceblue'
          >
            
            <NextLink href='/' passHref>

              <Button
              as='a'
              aria-label='Home'
              w='25%'
              colorScheme='black'
              variant='ghost'
              fontSize={14}>
                HOME
              </Button>

            </NextLink>

            
            <NextLink href='/AboutUs' passHref>

              <Button
              as='a'
              aria-label='About'
              w='25%'
              colorScheme='black'
              variant='ghost'
              fontSize={14}>
                ABOUT
              </Button>

            </NextLink>
            
            
            <NextLink href='/Contact' passHref>

              <Button
              as='a'
              aria-label='Contact'
              w='25%'
              colorScheme='black'
              variant='ghost'
              fontSize={14}>
                CONTACT
              </Button>

            </NextLink>
            
          </Flex>

        </HStack>

      </VStack>

    </>

  )


}