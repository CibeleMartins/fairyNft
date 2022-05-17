import React from 'react'
import {Flex} from '@chakra-ui/react'
import Divisor from './Divisor'

export default function Body (props) {

  return (
    <>
      <Flex
        w='100%'
        h= '100%'
        bg='black'>

        <Divisor/>

      </Flex>
    </>
 
  )


}