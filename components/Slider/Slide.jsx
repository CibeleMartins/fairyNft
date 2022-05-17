import Box from '@chakra-ui/react';
import Image from 'next/image';


export default function Slide ({image, w}) {

  return (
  <Box
  h='400px'
  position="relative"
  display='flex'
  ml={20}
  >

  <Box
  display='flex'
  alignItems='center'
  w='280px'
  >
    <Image w={w} src={image}/>
  </Box>
</Box>
)

}