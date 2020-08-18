import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';
import Banner from './components/Banner';
import Radium from 'radium'

class App extends Component {
  titleChangeListener = event => {
    this.setState({ title: event.target.value })
  }
  state = {
    persons: [
      { name: "Mark", age: 43 },
      { name: "James", age: 38 },
      { name: "Tim", age: 33 },
      { name: "Mary", age: 28 },
      { name: "abby", age: 34 },
      { name: "Kevin", age: 50 }
    ],
    title: "Hello React chtti302",
    showPersons: false
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
  toggleDisplayHandler = () => {
    this.setState({ showPersons: !this.state.showPersons }, () => {
      console.log(`current status = ${this.state.showPersons}`)
    })
  }
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }
  render() {
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: 'pointer',
      ":hover":{backgroundColor:'lightblue',color:'black'}
    }
    let persons = null;
    if (this.state.showPersons === true) {
      persons = (<div>{
        this.state.persons.map((person, index) => {
          return <Person
            key={index}
            clickCallback={() => this.deletePersonHandler(index)}
            name={person.name} age={person.age} />
        })
      }</div>)
      style.backgroundColor = 'red'
      style.color = 'black'
    }
    //let classes = ['blue','bold'].join(' ')
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('blue')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      <div className="App">
        <Counter step="2" />
        <h1 className={classes.join(' ')}>{this.state.title}</h1>
        <Banner clickCallback={this.titleChangeListener}
          name={this.state.title} />
        <Dashboard1 />
        <Dashboard2 />
        <button key="btn1" style={style} onClick={() => this.toggleDisplayHandler()}>
          show/hide persons</button>
        {
          // <button onClick={this.changeNameHandler.bind(this, "One Punch Man")}>Change</button>  
        }
        <button key="btn2" style={style} onClick={() => this.changeNameHandler("one Punch Man")}>Change</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);