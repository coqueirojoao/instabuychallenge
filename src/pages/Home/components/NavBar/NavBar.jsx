import { Box, Button } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineTag } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { TbGrill } from 'react-icons/tb';
import { GiSteak, GiBeerBottle } from 'react-icons/gi';
import { BiCheese } from 'react-icons/bi';

export default function NavBar() {
  return (
    <Box w='100%' borderTop='1px' borderBottom='1px' borderColor='gray.300'>
      <Box
        display='flex'
        flexDirection={['column', 'row']}
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
        >
          Início
        </Button>
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <BsGrid />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Todas Categorias
        </Button>
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
        <Button
          colorScheme='transparent'
          leftIcon={
            <Box as='span' fontSize={['24px', '30px']}>
              <TbGrill />
            </Box>
          }
          fontWeight='200'
          textColor='black'
          transition='all 0.2s'
          borderRadius='md'
          _hover={{ bg: 'gray.100' }}
        >
          Kit Churrasco
        </Button>
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
      </Box>
    </Box>
  );
}
