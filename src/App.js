import React, { Component } from 'react';
import STORE from './dummy-store';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';


const { folders, notes } = STORE; 

class App extends Component {
  state = {
    folders,
    notes,
    selectedFolder: null
  };

  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <Nav folders={this.state.folders} notes={this.state.notes} />
          <Main notes={this.state.notes} />
        </main>        
      </div>
    );
  }
}

export default App;
