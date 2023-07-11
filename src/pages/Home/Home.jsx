import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainContent from './MainContent/MainContent';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <Box>
      <Box top='0' position={['none', 'sticky']} zIndex='2' bg='white'>
        <Header />
        <NavBar />
      </Box>
      <MainContent />
      <Footer />
    </Box>
  );
}
