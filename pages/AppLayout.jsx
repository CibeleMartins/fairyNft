import React from 'react'
import {Flex} from '@chakra-ui/react'
import Image from 'next/image';

import Header from "../components/Header";
import Body from "../components/Body";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function AppLayout () {

  return (

          <>
          <Header/>
          
          <Flex w='100%'>
          
         
            <Body>

              <Container>
                  
              </Container>

              <Container>
                
              </Container>

              <Container>
                
              </Container>

              <Container>
                
              </Container>

              <Container>
                
              </Container>


            </Body>

          </Flex>

          <Footer/>

          </>

  )

}



