import React from 'react';
import { Link } from 'react-router-dom';

function NotesFiltered(props) {
    const notes = props.folderNotes.map(note => 
            <div className="Note">
                <Link to={`/notes/${note.id}`}><h2>{note.name}</h2></Link>
                <p>{note.modified}<button>Delete Note</button></p>
            </div>
        );
    return (
        <>
            {notes}
        </>
    );
}

export default NotesFiltered;