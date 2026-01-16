import React from 'react';
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainChat />
    </div>
  );
}

export default App;