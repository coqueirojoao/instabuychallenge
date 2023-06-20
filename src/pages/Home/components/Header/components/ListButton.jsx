import { Button } from '@chakra-ui/react';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export default function ListButton() {
  return (
    <Button
      colorScheme='transparent'
      leftIcon={<AiOutlineUnorderedList />}
      textColor='black'
      transition='all 0.2s'
      borderRadius='md'
      _hover={{ bg: 'gray.100' }}
    >
      Listas
    </Button>
  );
}
