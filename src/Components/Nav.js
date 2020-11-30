import React from 'react';
import './Nav.css';
import { NavLink, Route, Link } from 'react-router-dom';
import NotesNav from './NotesNav';
import NotefulContext from '../NotefulContext';
import NotefulError from './NotefulError';

class Nav extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { folders } = this.context;
        const folderButtons = folders.map(folder =>
            <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                <button id={folder.id}>{folder.folder_name}</button>
            </NavLink>
        );
        return (
            <section className='Nav'>
                <div className='nav-container'>
                    <NotefulError>
                        <Route 
                            exact path='/'>
                            {folderButtons}
                            <NavLink to={`/add-new-folder`}>
                                <button className='add-folder'>Add Folder</button>
                            </NavLink>
                        </Route>
                        <Route 
                            path='/notes/:noteid' 
                            component={NotesNav}
                        />
                        <Route
                            path='/folder/:folderid'
                        >
                            {folderButtons}
                            <Link to={`/add-new-folder`}>
                                <button className='add-folder'>Add Folder</button>
                            </Link>
                        </Route>
                        <Route 
                            path='/add-new-folder'
                            component={NotesNav} 
                        />
                        <Route 
                            path='/add-new-note'
                            component={NotesNav}
                        />
                    </NotefulError>
                </div>
            </section>
        );
    }
}

export default Nav;