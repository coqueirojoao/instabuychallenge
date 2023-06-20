import { Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton() {
  return (
    <Button colorScheme='green' leftIcon={<AiOutlineShoppingCart />}>
      Carrinho
    </Button>
  );
}
