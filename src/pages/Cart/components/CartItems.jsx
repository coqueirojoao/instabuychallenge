import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';

export default function CartItems() {
  const [cart, setCart] = useState();

  useEffect(() => {
    function fetchCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(cart);
    }
    fetchCart();
  }, []);

  return (
    <Box>
      <Box display='flex' justifyContent='center' bg='gray.200' pt='16'>
        <Box
          display='flex'
          justifyContent='center'
          bg='gray.100'
          p='10'
          rounded='lg'
          shadow='2xl'
        >
          <Text fontSize='6xl' borderBottom='2px' borderColor='green.500'>
            Carrinho
          </Text>
          <Box fontSize='4xl' color='green.500'>
            <BiCart />
          </Box>
        </Box>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        bg='gray.200'
        py='32'
        alignItems='center'
        flexWrap='wrap'
        gap='5'
      >
        {cart?.map((item) => (
          <Box
            key={item.id}
            bg='white'
            w='700px'
            h={['400px', '300px']}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            rounded='2xl'
            shadow='lg'
            py='5'
          >
            <Text fontSize='22' color='gray.600' textAlign='center'>
              {item.name}
            </Text>
            <Image
              src={`https://assets.instabuy.com.br/ib.item.image.small/s-${item?.images[0]}`}
            />
            <Text
              fontSize='18'
              color='gray.600'
            >{`Quantidade: ${item.amount}`}</Text>
            <Text fontSize='22' color='green.600' pt='5'>{`Valor: ${
              item.prices[0].promo_price
                ? (item.amount * item.prices[0].promo_price).toLocaleString(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    }
                  )
                : (item.amount * item.prices[0].price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
            }`}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
