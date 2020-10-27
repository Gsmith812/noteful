import React from 'react';
import './Main.css';
import Note from './Note';
import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import NotesFiltered from './NotesFiltered';

function Main(props) {
    const notesList = props.notes.map(note => 
        <Note key={note.id} noteInfo={note} folderId={note.folderId} />
    );
    return (
        <div className='Main'>
            <Route exact path='/'>
                {notesList}
                <button>Add Note</button>
            </Route>
            <Route path='/notes/:noteid' render={(routerProps) => 
                <NotePage noteId={routerProps.match.params.noteid} notes={props.notes}/> 
            }/>
            <Route
                path='/folder/:folderid'
                render={(routerProps) =>
                    <NotesFiltered folderNotes={props.notes.filter(note => (note.folderId === routerProps.match.params.folderid)
                        ? note
                        : null
                        )}
                    />
            }/>
        </div>
    );
}

export default Main;