import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import bannerImg1 from '../../../../assets/bannerImg1.jpeg';
import bannerImg2 from '../../../../assets/bannerImg2.jpeg';
import { useMediaQuery } from 'react-responsive';

const images = [bannerImg1, bannerImg2];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobileDevice = useMediaQuery({ maxWidth: 768 }); // Verifica se é um dispositivo móvel

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isMobileDevice) {
    return null; // Retorna null para não renderizar o componente em dispositivos móveis
  }

  return (
    <Box position='relative' w='70%' mx='auto'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <Image src={image} alt='Banner' boxShadow='base' rounded='2xl' />
        </motion.div>
      ))}
    </Box>
  );
}

export default Banner;
