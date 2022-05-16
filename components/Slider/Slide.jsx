import {Box, Heading} from '@chakra-ui/react';
import Image, {StaticImageData} from 'next/image';



export default function Slide ({image}) {

  <Box
  w={{base: '178px', lg: '278px'}}
  h={{base: '272px', lg: '426px'}}
  position="relative"
  >

  <Box
    borderRadius="30px"
    w="100%"
    h="100%"
    objectFit="cover"
    position="relative"
  >
    <Image src={image}/>
  </Box>
</Box>

}