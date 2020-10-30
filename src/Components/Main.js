import React from 'react';
import './Main.css';
import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import NotesList from './NotesList';

function Main(props) {
   
    return (
        <div className='Main'>
            <Route exact path='/'>
                <NotesList />
                <button>Add Note</button>
            </Route>
            <Route path='/notes/:noteid' component={NotePage}/> 
            <Route
                path='/folder/:folderid'
                component={NotesList}/>
        </div>
    );
}

export default Main;