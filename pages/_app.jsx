
import {ChakraProvider} from '@chakra-ui/react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";

import '../styles/swiper.css'

export default function MyApp({ Component, pageProps }) {
  return (


    <ChakraProvider>
       <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </ChakraProvider>
         
   
         
    
  )
}


