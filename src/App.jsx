import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Box } from '@chakra-ui/react';
import MainProduct from './pages/Product/MainProduct';
import Cart from './pages/Cart/Cart';

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:slug' element={<MainProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Box>
  );
}
