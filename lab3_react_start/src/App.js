import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';

class App extends Component {
  state = {
    persons: [
      { name: "Mark", age: 43 },
      { name: "James", age: 38 },
      { name: "Tim", age: 33 },
      { name: "Mary", age: 28 },
      { name: "abby", age: 34 },
      { name: "Kevin", age: 50 }

    ]
  }
  changeNameHandler = (leaderName) => {
    console.log("change button clicked")
    this.setState({
      persons: [
        { name: leaderName, age: 45 },
        { name: "Captain America", age: 35 },
        { name: "Iron man", age: 42 },
        { name: "Thor", age: 200 },
        { name: "Groot", age: 5 },
        { name: "Hawk", age: 40 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Counter step="2" />
        <Dashboard1 />
        <Dashboard2 />
        <button onClick={this.changeNameHandler.bind(this, "One Punch Man")}>Change</button>
        <Person
          clickCallback={this.changeNameHandler.bind(this,"Peter Pan")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Pet name="king" species="cat" />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Team Leader</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age} />
        <Person name={this.state.persons[5].name} age={this.state.persons[5].age} />
        <Pet />
      </div>
    );
  }
}

export default App;
