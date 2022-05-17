import React from 'react'
import {Box} from '@chakra-ui/react'
import Divisor from './Divisor'

export default function Body (props) {

  return (
    <>
      <Box
        w='100%'
        h= '100%'
        bg='black'>

        <Divisor/>

      </Box>
    </>
 
  )


}