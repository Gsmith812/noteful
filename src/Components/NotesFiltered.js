import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function NotesFiltered(props) {
    const notes = props.folderNotes.map(note => 
            <div className="Note">
                <Link to={`/notes/${note.id}`}><h2>{note.name}</h2></Link>
                <p>Date modified: {moment(note.modified).format('Do MMM YYYY')}<button>Delete Note</button></p>
            </div>
        );
    return (
        <>
            {notes}
        </>
    );
}

export default NotesFiltered;