import React from 'react';
import './NotesNav.css';

function NotesNav(props) {
    const folder = props.folders.find(folder => folder.id === props.note.folderId);
    return (
        <div className='NotesNav'>
            <button onClick={() => props.history.goBack()}>Go Back</button>
            <h2>{folder.name}</h2>
        </div>
    );
}

export default NotesNav;