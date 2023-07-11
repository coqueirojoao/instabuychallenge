import { Box } from '@chakra-ui/react';
import Header from '../Home/components/Header/Header';
import NavBar from '../Home/components/NavBar/NavBar';
import CartItems from './components/CartItems';

export default function Cart() {
  return (
    <Box>
      <Header />
      <NavBar />
      <CartItems />
    </Box>
  );
}
