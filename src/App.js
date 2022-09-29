import React from 'react';
import './App.css';
import BannerImage from  './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to my Catalogs</h1>
          <h3>ROMANO</h3>
          <img className="banner" src="../images/banner.jpg" alt="Banner de prueba"/>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
