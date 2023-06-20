import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput() {
  return (
    <InputGroup w='50%'>
      <InputLeftElement pointerEvents='none'>
        <BsSearch color='gray.300' />
      </InputLeftElement>
      <Input
        type='text'
        placeholder='O que você procura?'
        borderRadius='md'
        boxShadow='md'
        border='2px'
      />
    </InputGroup>
  );
}

export default SearchInput;
