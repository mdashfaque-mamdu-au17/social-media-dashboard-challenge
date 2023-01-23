import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from './store/context';
import Navbar from './sections/Navbar';
import SocialMediaSection from './sections/SocialMediaSection';
import OverviewSection from './sections/OverviewSection';

function App() {
  const { theme } = useGlobalContext();
  return (
    <main
      className={classNames(theme ? 'bg-white' : 'bg-dark-800', 'min-h-screen')}
    >
      <Navbar />
      <SocialMediaSection />
      <OverviewSection />
    </main>
  );
}

export default App;
