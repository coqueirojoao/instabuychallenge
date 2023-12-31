import { useEffect, useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

function ContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const url =
        'https://api.instabuy.com.br/apiv3/layout?subdomain=supermercado';
      const response = await fetch(url);
      const data = await response.json();
      setAllProducts(data.data);
      setIsLoading(false);
    };
    fetchAllProducts();
  }, []);

  const contextValue = {
    allProducts,
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
