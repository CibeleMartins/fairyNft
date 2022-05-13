import React from 'react'
import {Flex} from '@chakra-ui/react'
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function AppLayout () {

  return (

          <>
          <Header/>
          
          <Flex 
          w='100%'
          bg='black'>
          
            <Body>
            </Body>

          </Flex>

          <Footer/>

          </>

  )

}



