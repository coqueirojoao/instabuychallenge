import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakra-theme.js';
import ContextProvider from './context/ContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ContextProvider>
);
