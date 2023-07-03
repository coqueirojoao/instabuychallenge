import { Box, Spinner } from '@chakra-ui/react';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

export default function Loading() {
  const { isLoading } = useContext(AppContext);

  return (
    <Box>
      {isLoading ? (
        <Box
          display={isLoading ? 'flex' : 'none'}
          justifyContent='center'
          alignItems='center'
          width='100%'
          height='100vh'
          position='fixed'
          top='0'
          left='0'
          bg='rgba(0, 0, 0, 0.5)'
          zIndex='9999'
        >
          <Spinner color='white' size='xl' />
        </Box>
      ) : null}
    </Box>
  );
}
