import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Dashboard1 />
      <Person />
      <Dashboard2 />
      <Person />
    </div>
  );
}

export default App;