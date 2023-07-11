import { Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function CartButton() {
  const navigate = useNavigate();
  return (
    <Button
      colorScheme='green'
      leftIcon={<AiOutlineShoppingCart />}
      onClick={() => navigate('/cart')}
    >
      Carrinho
    </Button>
  );
}
