import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainContent from './MainContent/MainContent';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </Box>
  );
}
