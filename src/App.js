import React from 'react';
import './App.css';
import IAP from './pages/IAP.js'; // Import your new component
// If you have a Header component, import it here too
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <IAP /> 
    </div>
  );
}

export default App;