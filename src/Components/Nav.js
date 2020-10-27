import React from 'react';
import './Nav.css';
import { Link, Route } from 'react-router-dom';
import NotesNav from './NotesNav';
import FolderSelected from './FolderSelected';

function Nav(props) {
    const folderButtons = props.folders.map(folder =>
        <Link to={`/folder/${folder.id}`} key={folder.id}>
            <button id={folder.id}>{folder.name}</button>
        </Link>
    );
    return (
        <div className='Nav'>
            <div className='nav-container'>
                <Route 
                    exact path='/'>
                    {folderButtons}
                    <button className='add-folder'>Add Folder</button>
                </Route>
                <Route 
                    path='/notes/:noteid' 
                    render={(routerProps) =>
                        <NotesNav 
                            history={routerProps.history}
                            folders={props.folders}
                            note={props.notes.find(note => note.id === routerProps.match.params.noteid)}
                        />
                    }
                />
                <Route
                    path='/folder/:folderid'
                    render={(routerProps) =>
                        <FolderSelected 
                            folders={props.folders}
                            selectedFolder={props.folders.find(folder => folder.id === routerProps.match.params.folderid)}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default Nav;