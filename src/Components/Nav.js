import React from 'react';
import './Nav.css';
import { NavLink, Route } from 'react-router-dom';
import NotesNav from './NotesNav';
import NotefulContext from '../NotefulContext';

class Nav extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { folders } = this.context;
        const folderButtons = folders.map(folder =>
            <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                <button id={folder.id}>{folder.name}</button>
            </NavLink>
        );
        return (
            <section className='Nav'>
                <div className='nav-container'>
                    <Route 
                        exact path='/'>
                        {folderButtons}
                        <button className='add-folder'>Add Folder</button>
                    </Route>
                    <Route 
                        path='/notes/:noteid' 
                        component={NotesNav}
                    />
                    <Route
                        path='/folder/:folderid'
                    >
                        {folderButtons}
                        <button className='add-folder'>Add Folder</button>
                    </Route>
                </div>
            </section>
        );
    }
}

export default Nav;