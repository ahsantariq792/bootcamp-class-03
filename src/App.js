import React from 'react';
import './App.css';
import Dinner from './dinner.js'

function App() {
  return (
    <div>
      <Dinner dishname="karahi" sweetdish="ice-cream"/>
      <hr/>
      <Dinner dishname="Biryani" sweetdish="Gulab-Jaman"/>
      <hr/>
      <Dinner dishname="Chiken-Tikka" sweetdish="kheer"/>
    </div>
  );
}

export default App;
