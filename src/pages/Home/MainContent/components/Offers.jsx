import { useContext, useRef } from 'react';
import AppContext from '../../../../context/AppContext';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Offers() {
  const { allProducts } = useContext(AppContext);
  const containerRef = useRef(null);

  const scrollContainer = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <Box display='flex' justifyContent='center' py='5' id='offerProducts'>
      <Flex
        align='center'
        w={['full', '70%']}
        rounded={['none', '2xl']}
        shadow='lg'
        gap='3'
        justify='center'
        bg='white'
      >
        <IconButton
          aria-label='Voltar'
          icon={<ChevronLeftIcon fontSize='3xl' />}
          size='sm'
          variant='ghost'
          colorScheme='gray'
          onClick={() => scrollContainer(-200)}
        />
        <Box
          flex='1'
          overflow='hidden'
          sx={{
            '&::-webkit-scrollbar': {
              height: '4px',
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray.200',
              borderRadius: '2px',
            },
          }}
          ref={containerRef}
          maxW='calc(100vw - 150px)'
        >
          <Box display='flex' alignItems='center' fontSize='2xl' gap='2' py='2'>
            <AiOutlineThunderbolt color='green' />
            <Text fontWeight='700'>Ofertas</Text>
          </Box>
          <Flex>
            {allProducts?.promo?.map((product) => (
                <Box
                  key={product.id}
                  w='300px'
                  h='300px'
                  mr='4'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  flexDirection='column'
                >
                  <Link to={`/product/${product.slug}`}>
                  <Image
                    src={`https://assets.instabuy.com.br/ib.item.image.small/s-${product.images[0]}`}
                    alt={product.name}
                    boxSize='130px'
                    objectFit='cover'
                  />
                  <Box display='flex' alignItems='center' gap='2'>
                    <Text color='red.600' fontWeight='600'>
                      {product.prices[0].promo_price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                    <Text fontSize='smaller' textDecoration='line-through'>
                      {product.prices[0].price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                  </Box>
                  <Text fontSize='small' color='gray.600' w='50' h='100px'>
                    {product.name}
                  </Text>
                  </Link>
                </Box>
            ))}
          </Flex>
        </Box>
        <IconButton
          aria-label='Avançar'
          icon={<ChevronRightIcon fontSize='3xl' />}
          size='sm'
          variant='ghost'
          colorScheme='gray'
          onClick={() => scrollContainer(200)}
        />
      </Flex>
    </Box>
  );
}
