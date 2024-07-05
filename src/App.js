import React from 'react';
import './App.css';
import logo from './logo.svg';
  
function App() {
  console.log('testing')
  return (
    <div className="App">
      <h1>Hello, React with Webpack!</h1>
      <img src={logo} className='App-logo' />
    </div>
  );
}

export default App;
