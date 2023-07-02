import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import stripTags from 'striptags';

export default function ProductContent({ product }) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      bg='gray.200'
      py='10'
      alignItems='center'
      flexDirection='column'
    >
      <Flex w='70%' bg='white' rounded='lg' justify='center' align='center'>
        <Image
          src={`https://assets.instabuy.com.br/ib.item.image.large/l-${product?.images[0]}`}
          w='500px'
        />
        <Flex
          align='center'
          pl='10'
          direction='column'
          gap='5'
          justify='center'
        >
          <Text fontSize='30' fontWeight='600'>
            {product?.name}
          </Text>
          {product?.prices[0].promo_price ? (
            <Flex justify='center' align='center'>
              <Text fontSize='30' color='#E91E63' fontWeight='600'>
                {product?.prices[0].promo_price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Text fontSize='15' pl='2' color='#E91E63'>{` /uni`}</Text>
              <Text
                fontSize='16'
                pl='8'
                color='gray.600'
                textDecoration='line-through'
              >
                {product?.prices[0].price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            </Flex>
          ) : (
            <Flex justify='center' align='center'>
              <Text fontSize='30' color='black' fontWeight='600'>
                {product?.prices[0].price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Text fontSize='15' pl='2' color='black'>{` /uni`}</Text>
            </Flex>
          )}
          <Button colorScheme='green' size='lg' rounded='lg' mt='10'>
            Adicionar ao carrinho
          </Button>
        </Flex>
      </Flex>
      <Flex
        w='70%'
        bg='white'
        rounded='lg'
        mt='5'
        direction='column'
        gap='2'
        py='10'
        justify='center'
      >
        <Text fontSize='25' px='5'>
          Descrição do Produto
        </Text>
        <Text fontSize='16' px='5' color='gray.600'>
          {stripTags(product?.description)}
        </Text>
      </Flex>
      <Flex
        w='70%'
        bg='white'
        rounded='lg'
        mt='5'
        direction='column'
        gap='2'
        py='10'
        justify='center'
      >
        <Text fontSize='15' px='5'>
          Informações sobre o produto ou embalagem apresentada pode não ser
          atual ou completo. Sempre consulte o produto físico para as
          informações mais precisas e avisos. Para obter informações adicionais,
          entre em contato com o revendedor ou fabricante.
        </Text>
      </Flex>
    </Box>
  );
}

ProductContent.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        promo_price: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
