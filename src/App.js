import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </main>

    );
  }
}

export default App;
