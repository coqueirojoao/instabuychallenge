import Banner from './components/Banner';
import { Box } from '@chakra-ui/react';
import Offers from './components/Offers';

export default function MainContent() {
  return (
    <div>
      <Box>
        <Offers />
        <Banner />
      </Box>
    </div>
  );
}
