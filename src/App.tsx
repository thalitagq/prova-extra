import React from 'react';
import { Home } from './pages/Home';
import { Navbar } from './UI/Navbar';

function App(): JSX.Element {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
