import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import MenuUserHeader from './components/MenuUserHeader';

export default function Header() {
  return (
    <Box>
      <Box>
        <Text>Supermercado Modelo</Text>
        <MenuUserHeader />
      </Box>
    </Box>
  );
}
