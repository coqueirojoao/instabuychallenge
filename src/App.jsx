import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  );
}
