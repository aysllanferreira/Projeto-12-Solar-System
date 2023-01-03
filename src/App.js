import React from 'react';
import Container from '@mui/material/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.scss';

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      } }
    >
      <Header />
      <SolarSystem />
      <Missions />
      <Footer />
    </Container>
  );
}

export default App;
