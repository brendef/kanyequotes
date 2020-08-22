import React from 'react';
import './App.css';

function App() {

  const getQuote = () => {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => document.getElementById('sex').innerHTML = data.quote)
  }

  return (
    <div className="App">
      
    <h1>Get your free kanye quote below</h1>

    <h3 id="sex">  </h3>

    <button onClick={getQuote} className="myButton"> get quote </button>

    </div>
  );
}

export default App

