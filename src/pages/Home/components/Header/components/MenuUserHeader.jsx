import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

export default function MenuUserHeader() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        px={4}
        py={2}
        colorScheme='transparent'
        textColor='black'
        transition='all 0.2s'
        borderRadius='md'
        _hover={{ bg: 'gray.100' }}
        leftIcon={<AiOutlineUser />}
        rightIcon={<ChevronDownIcon mx='3' />}
      >
        Minha Conta
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={
            <Box as='span' fontSize='24px'>
              <BiLogIn />
            </Box>
          }
        >
          Entrar
        </MenuItem>
        <MenuDivider />
        <MenuItem>Termos de Serviço</MenuItem>
        <MenuItem>Política de Privacidade</MenuItem>
      </MenuList>
    </Menu>
  );
}
