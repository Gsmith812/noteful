import React, { Component } from 'react';
import './dummy-store';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';
import NotefulContext from './NotefulContext'; 

class App extends Component {
  state = {
    folders : [],
    notes : [],
    error: null,
  };

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(res => res.ok ? res.json() : Promise.reject({error: res.status}))
      .then(folders => {
        this.setState({
          folders: folders
        })
      })
      .catch(err => this.setState({error: err.message}));
    fetch('http://localhost:9090/notes')
      .then(res => res.ok ? res.json() : Promise.reject({error: res.status}))
      .then(notes => {
        this.setState({
          notes: notes
        })
      })
      .catch(err => this.setState({error: err.message}));
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
    }
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>Noteful</h1></Link>
        </header>
        <main>
          <NotefulContext.Provider value={contextValue}>
            <Nav />
            <Main />
          </NotefulContext.Provider>
        </main>        
      </div>
    );
  }
}

export default App;
