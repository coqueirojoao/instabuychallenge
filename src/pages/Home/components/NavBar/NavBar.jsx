import { Box, Button, Link } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineTag } from 'react-icons/ai';
import { GiSteak, GiBeerBottle, GiWaterBottle } from 'react-icons/gi';
import { BiCheese } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate();

  return (
    <Box w='100%' borderTop='1px' borderBottom='1px' borderColor='gray.300'>
      <Box
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='center'
        py='5'
        px={['4', '64']}
        gap='2'
      >
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <AiOutlineHome />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
          onClick={() => navigate('/')}
        >
          Início
        </Button>
        <Link href='#offerProducts'>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <AiOutlineTag />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Ofertas
        </Button>
        </Link>
        <Link href='#meatAndFishesProduct'>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <GiSteak />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Açougue / Aves / Peixaria
        </Button>
        </Link>
        <Link href='#coldCutsProduct'>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <BiCheese />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Frios e Laticínios
        </Button>
        </Link>
        <Link href='#alcoholicBeers'>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <GiBeerBottle />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Bebidas Alcoólicas
        </Button>
        </Link>
        <Link href='#nonAlcoholicBeers'>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <GiWaterBottle />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Bebidas Não Alcoólicas
        </Button>
        </Link>
      </Box>
    </Box>
  );
}
