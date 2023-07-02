import { Box } from '@chakra-ui/react';
import Header from '../Home/components/Header/Header';
import NavBar from '../Home/components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductContent from './components/ProductContent';
import Footer from '../Home/components/Footer/Footer';

export default function MainProduct() {
  const { slug } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://api.instabuy.com.br/apiv3/item?subdomain=supermercado&slug=${slug}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data.data[0]);
    };
    fetchProduct();
  }, [slug]);

  return (
    <Box>
      <Header />
      <NavBar />
      <ProductContent product={product} />
      <Footer />
    </Box>
  );
}
