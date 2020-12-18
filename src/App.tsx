import React from 'react';
import { Provider } from "react-redux";

import { Layout } from './components';
import Main from './main/Main';

import { store } from './redux';

import './App.css';


const App: React.FC = () => (
  <Layout>
    <Provider store={store}>
      <Main />
    </Provider>
  </Layout>
);

export default App