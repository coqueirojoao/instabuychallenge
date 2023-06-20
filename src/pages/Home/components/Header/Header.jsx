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
        alignItems='center'
        justifyContent='space-evenly'
        py='5'
        px='64'
        gap='2'
      >
        <Image src={logo} alt='Logo' boxSize='60px' />
        <Text fontWeight='600' fontFamily='body' textColor='black'>
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
