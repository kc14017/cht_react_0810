import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter step="2" />
      <Dashboard1 />
      <Dashboard2 />
      <Person name="Mark" age="43" />
      <Pet name="king" species="cat" />
      <Person name="James" age="38" />
      <Person name="Tim" age="33" >Team Leader</Person>
      <Person name="Mary" age="28" />
      <Person name="abby" age="34" />
      <Person name="Kevin" age="50" />
      <Pet />
    </div>
  );
}

export default App;