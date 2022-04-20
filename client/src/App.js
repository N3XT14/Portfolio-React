import React from 'react';

import { About, Header, Work, Skills } from './containers';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
    </div>
  );
};

export default App;