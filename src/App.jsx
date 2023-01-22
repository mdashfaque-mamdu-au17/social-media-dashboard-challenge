import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from './store/context';
import Navbar from './sections/Navbar';
import SocialMediaSection from './sections/SocialMediaSection';

function App() {
  const { theme } = useGlobalContext();
  return (
    <main className={classNames(theme ? 'bg-white' : 'bg-dark-800')}>
      <Navbar />
      <SocialMediaSection />
    </main>
  );
}

export default App;
