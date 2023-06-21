import Banner from './components/Banner';
import { Box } from '@chakra-ui/react';
import Offers from './components/Offers';
import MeatAndFishes from './components/MeatAndFishes';

export default function MainContent() {
  return (
    <div>
      <Box position='relative'>
        <Offers />
        <Banner />
        <MeatAndFishes />
      </Box>
    </div>
  );
}
