import Banner from './components/Banner';
import { Box } from '@chakra-ui/react';
import Offers from './components/Offers';
import MeatAndFishes from './components/MeatAndFishes';
import ColdCutsAndDairy from './components/ColdCutsAndDairy';
import AlcoholicBeers from './components/AlcoholicBeers';
import NonAlcoholicBeers from './components/NonAlcoholicBeers';
import Loading from '../../components/Loading';

export default function MainContent() {
  return (
    <Box position='relative' bg='gray.200'>
      <Loading />
      <Offers />
      <Banner />
      <MeatAndFishes />
      <ColdCutsAndDairy />
      <AlcoholicBeers />
      <NonAlcoholicBeers />
    </Box>
  );
}
