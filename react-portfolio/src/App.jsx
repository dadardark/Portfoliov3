import React, { useState } from 'react';
import './App.css';
import LockScreen from './assets/LockScreen.jsx';
import HomeScreen from './assets/HomeScreen.jsx';
import BootUpScreen from './assets/BootUpScreen.jsx';
import AppScreen from './assets/AppScreen.jsx';
import Footer from './assets/Footer.jsx';

function App() {
  const [currentScreen, setCurrentScreen] = useState('boot');

  return (
    <div className="App">
      {currentScreen === 'boot' && <BootUpScreen onBootComplete={() => setCurrentScreen('lock')} />}
      {currentScreen === 'lock' && <LockScreen unlock={() => setCurrentScreen('home')} />}
      {currentScreen === 'home' && <HomeScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'AppScreen' && <AppScreen />} 
      <Footer />
    </div>
  );
}

export default App;
