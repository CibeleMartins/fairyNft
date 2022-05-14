import {VStack, HStack, Box, Flex, Button, IconButton} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/Link';
import logo from '../public/assets/img/logo.png';
import breakpoints from '../pages/breakpoints';

export default function Header (props) {

  return (

      <VStack 
      w='100%' 
      h='80px' 
      bg='black'
      position='fixed'
      zIndex={999}
      top={0}
      left={0}
      right={0}

      >

        <HStack 
        w= '100%' 
        h='80px'
        justifyContent='space-between'
        >

          <Box 
          w='130px'
          h='100px'
          ml={5}
          mb={5}>

            <Image
            src={logo}
            alt='logo'
            >
            </Image>

          </Box>

          <Flex
          w='40%'
          h='40px'    
          justifyContent= 'space-evenly'
          color='aliceblue'
          display={['none', 'none', 'flex', 'flex']}
          >
            
            <NextLink href='/' passHref>

              <Button
              as='a'
              aria-label='Home'
              w='25%'
              colorScheme='black'
              variant='ghost'
              fontSize={14}
              mt={2}>
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
              fontSize={14}
              mt={2}>
                ABOUT
              </Button>

            </NextLink>
            
            
            <NextLink 
            href='/Contact' 
            passHref>

              <Button
              as='a'
              aria-label='Contact'
              w='25%'
              colorScheme='black'
              variant='ghost'
              fontSize={14}
              mt={2}>
                CONTACT
              </Button>

            </NextLink>
            
          </Flex>

          <Box boxSize={65}
          display={['flex', 'flex', 'none', 'none']}
          mr={10}>
            <IconButton
            aria-label='Open Menu'
            size='md'
            icon={<HamburgerIcon/>}
            colorScheme='black'
            >
            </IconButton>
          </Box>

        </HStack>

      </VStack>

  )


}