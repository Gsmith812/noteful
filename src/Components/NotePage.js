import React from 'react';
import './NotePage.css';
import moment from 'moment';

function NotePage(props) {
    const matchedNote = props.notes.find(note => note.id === props.noteId);
    const { name, modified, content} = matchedNote;
    return (
        <div>
            <div className="Note">
                <h2>{name}</h2>
                <p>Date modified: {moment(modified).format('Do MMM YYYY')}<button>Delete Note</button></p>
            </div>
            <div className='note-content'>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default NotePage;