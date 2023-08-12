import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
