import { Box, Image, Text } from '@chakra-ui/react';
import MenuUserHeader from './components/MenuUserHeader';
import SearchInput from './components/SearchInput';
import CartButton from './components/CartButton';
import ListButton from './components/ListButton';
import logo from '../../../../assets/instabuyLogo.png';

export default function Header() {
  return (
    <Box w='100%'>
      <Box
        display='flex'
        flexDirection={['column', 'row']}
        flexWrap={['wrap']}
        alignItems={['center', 'center']}
        justifyContent={['space-between', 'center']}
        py={['5', '5']}
        px={['4', '32']}
        gap='5'
      >
        <Box display='block' width='60px'>
          <Image
            src={logo}
            alt='Logo'
            objectFit='cover'
            width='100%'
            height='100%'
          />
        </Box>
        <Text
          fontWeight='600'
          fontFamily='body'
          textColor='black'
          textAlign={['center', 'left']}
          ml={['0', '8']}
        >
          Supermercado Modelo
        </Text>
        <SearchInput />
        <ListButton />
        <MenuUserHeader />
        <CartButton />
      </Box>
    </Box>
  );
}
