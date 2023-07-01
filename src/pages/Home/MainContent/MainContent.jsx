import Banner from './components/Banner';
import { Box } from '@chakra-ui/react';
import Offers from './components/Offers';
import MeatAndFishes from './components/MeatAndFishes';
import ColdCutsAndDairy from './components/ColdCutsAndDairy';
import AlcoholicBeers from './components/AlcoholicBeers';
import NonAlcoholicBeers from './components/NonAlcoholicBeers';

export default function MainContent() {
  return (
    <div>
      <Box position='relative' bg='gray.200'>
        <Offers />
        <Banner />
        <MeatAndFishes />
        <ColdCutsAndDairy />
        <AlcoholicBeers />
        <NonAlcoholicBeers />
      </Box>
    </div>
  );
}
