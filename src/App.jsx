import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import RoutesCharacterSelection from './navigation/RoutesCharacterSelection';

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (rental) => {
    setCartItems([...cartItems, rental]);
  };

  return (
    <Router> {/* Wrap the entire component tree in Router */}
      <div className="app-container">

        <RoutesCharacterSelection />
      </div>
    </Router>
  );
}

export default App;
