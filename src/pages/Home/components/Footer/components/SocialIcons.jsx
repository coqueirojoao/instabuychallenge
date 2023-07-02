import { Box } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Box display='flex' gap={5} mb={4}>
      <Box
        as='button'
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='40px'
        h='40px'
        borderRadius='50%'
        bg='#C13584'
        _hover={{ opacity: 0.8 }}
        cursor='pointer'
      >
        <FaInstagram fontSize='20px' color='#FFFFFF' />
      </Box>
      <Box
        as='button'
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='40px'
        h='40px'
        borderRadius='50%'
        bg='#3b5998'
        _hover={{ opacity: 0.8 }}
        cursor='pointer'
      >
        <FaFacebook fontSize='20px' color='#FFFFFF' />
      </Box>
      <Box
        as='button'
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='40px'
        h='40px'
        borderRadius='50%'
        bg='#25D366'
        _hover={{ opacity: 0.8 }}
        cursor='pointer'
      >
        <FaWhatsapp fontSize='20px' color='#FFFFFF' />
      </Box>
    </Box>
  );
};

export default SocialIcons;
