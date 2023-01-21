import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from './store/context';
import Navbar from './sections/Navbar';

function App() {
  const { theme } = useGlobalContext();
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
