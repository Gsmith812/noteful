import React from 'react';
import './Main.css';
import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import NotesList from './NotesList';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import NotefulError from './NotefulError';

function Main(props) {
   
    return (
        <section className='Main'>
            <NotefulError>
                <Route exact path='/'>
                    <NotesList />
                </Route>
                <Route path='/notes/:noteid' component={NotePage}/> 
                <Route
                    path='/folder/:folderid'
                    component={NotesList}/>
                <Route
                    path='/add-new-folder'
                    component={AddFolder}/>
                <Route
                    path='/add-new-note'
                    component={AddNote}/>
            </NotefulError>
        </section>
    );
}

export default Main;