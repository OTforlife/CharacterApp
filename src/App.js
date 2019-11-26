import React from 'react';
import logo from './logo.svg';
import './App.css';
import Attribute from './Attribute.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      strength: 3, dexterity: 3, constitution: 3, intelligence: 3, wisdom: 3, charisma: 3

    }
  }
  render() {
  return (
    <div className="App">
    <Attribute name = 'Strength'/>
    <Attribute name = 'Dexterity'/>
    <Attribute name = 'Constitution'/>
    <Attribute name = 'Intelligence'/>
    <Attribute name = 'Wisdom'/>
    <Attribute name = 'Charisma'/>
    </div>
  );}
}


export default App;
