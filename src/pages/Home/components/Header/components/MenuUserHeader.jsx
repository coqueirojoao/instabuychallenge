import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
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
        rightIcon={<ChevronDownIcon />}
      >
        Minha Conta
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
}
