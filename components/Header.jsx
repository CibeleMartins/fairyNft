
import {Flex} from '@chakra-ui/react';

import Image from 'next/image';

import logo from '../public/assets/img/logo.png'

export default function Header () {

  return (
    <Flex h='30%' w='100%'>
        <Image src={logo} alt='logo' width='50px' height='50px'></Image>
    </Flex>
  )
}