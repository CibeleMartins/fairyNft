import {Flex, Box, Text, Heading} from '@chakra-ui/react'


export default function Footer (props) {

  return (

      <Flex 
      w='100%' 
      h='400px' 
      bg='black'
      alignItems='flex-end'
      justifyContent='space-between'
      padding={10}
      >

        <Box
        color='aliceblue'
        fontWeight='sm'
        letterSpacing='4px'>
          <Heading
          color='aliceblue'
          fontWeight='sm'
          letterSpacing='4px'
          fontSize={30}
          borderBottom='1px solid'
          padding={4}>FEATURE</Heading>
          <Text
          p={1}
          mt={2}>
          What is NFT
          </Text>
          <Text
          p={1}>
          Fairies
          </Text>
          <Text
          p={1}>
          About Us
          </Text>
        </Box>

        
        <Box
          color='aliceblue'
          fontWeight='sm'
          letterSpacing='4px'
          mb={9}>
          <Heading
          color='aliceblue'
          fontWeight='sm'
          letterSpacing='4px'
          fontSize={30}
          borderBottom='1px solid'
          padding={4}>CONTACT US</Heading>
          <Text
          p={1}
          mt={2}>
          Contact Form
          </Text>
          <Text
          p={1}>
          (216) 310 - 4122
          </Text>
        </Box>

      </Flex>

  )


}