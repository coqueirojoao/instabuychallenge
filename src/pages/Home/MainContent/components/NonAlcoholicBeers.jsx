import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../../../context/AppContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { LuGlassWater } from 'react-icons/lu';

export default function NonAlcoholicBeers() {
  const { allProducts } = useContext(AppContext);
  const containerRef = useRef(null);

  const [NonAlcoholicBeersItems, setNonAlcoholicBeersItems] = useState();

  useEffect(() => {
    const getNonAlcoholicBeersItems = () => {
      if (allProducts) {
        const data = allProducts.collection_items[4];
        setNonAlcoholicBeersItems(data);
      }
    };
    getNonAlcoholicBeersItems();
  }, [allProducts]);

  const scrollContainer = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <Box display='flex' justifyContent='center' w='100%' my='5'>
      <Flex align='center' w='70%' rounded='sm' shadow='lg' gap='3'>
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
          <Box display='flex' alignItems='center' fontSize='2xl' gap='2'>
            <LuGlassWater color='gray' />
            <Text fontWeight='700'>{NonAlcoholicBeersItems?.title}</Text>
          </Box>
          <Flex>
            {NonAlcoholicBeersItems?.items?.map((product) => (
              <Box
                key={product.id}
                w='300px'
                h='400px'
                mr='4'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
              >
                <Image
                  src={`https://assets.instabuy.com.br/ib.item.image.small/s-${product.images[0]}`}
                  alt={product.name}
                  boxSize='130px'
                  objectFit='cover'
                />
                <Box display='flex' alignItems='center' gap='2'>
                  {product.prices[0].promo_price ? (
                    <Text color='red.600' fontWeight='600'>
                      {product.prices[0].promo_price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                  ) : null}
                  {product.prices[0].promo_price ? (
                    <Text fontSize='smaller' textDecoration='line-through'>
                      {product.prices[0].price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                  ) : (
                    <Text color='black' fontWeight='600'>
                      {product.prices[0].price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </Text>
                  )}
                </Box>
                <Text fontSize='small' color='gray.600' w='50' h='100px'>
                  {product.name}
                </Text>
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
