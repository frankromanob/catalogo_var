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
          <h1>Welcome to my PhotoJournal</h1>
          <h3>ROMANO</h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
