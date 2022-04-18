import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store/store';


ReactDOM.render(
    <ChakraProvider>
      <Provider store={store}>
        <Home />
      </Provider>
    </ChakraProvider>,
  document.getElementById('root')
);