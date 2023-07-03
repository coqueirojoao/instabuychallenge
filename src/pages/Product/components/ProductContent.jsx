import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

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
      <Flex
        w={['90%', '70%']}
        bg='white'
        rounded='lg'
        justify='center'
        align='center'
        direction={['column', 'row']}
      >
        <Image
          src={`https://assets.instabuy.com.br/ib.item.image.large/l-${product?.images[0]}`}
          w='500px'
          rounded='lg'
        />
        <Flex
          align='center'
          pl={['none', '10']}
          direction='column'
          gap={['none', '5']}
          justify='center'
        >
          <Text
            fontSize='30'
            fontWeight='600'
            px={['5', 'none']}
            textAlign={['center', 'none']}
          >
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
          <Button colorScheme='green' size='lg' rounded='lg' my='10'>
            Adicionar ao carrinho
          </Button>
        </Flex>
      </Flex>
      <Flex
        w={['90%', '70%']}
        bg='white'
        rounded='lg'
        justify='center'
        align='center'
        gap='2'
        mt='5'
        py='10'
        direction='column'
        textAlign={['center', 'none']}
      >
        <Text fontSize='25' px='5'>
          Descrição do Produto
        </Text>
        <Text
          fontSize='16'
          px='5'
          color='gray.600'
          dangerouslySetInnerHTML={{ __html: product?.description }}
        ></Text>
      </Flex>
      <Flex
        w={['90%', '70%']}
        bg='white'
        rounded='lg'
        justify='center'
        align='center'
        gap='2'
        mt='5'
        py='10'
        direction='column'
        textAlign={['center', 'none']}
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
