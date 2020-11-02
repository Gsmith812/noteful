import React from 'react';
import NotefulContext from '../NotefulContext';
import Note from './Note';
import './NotesList.css';
import { Link } from 'react-router-dom';

class NotesList extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        },
        history: {}
    }
    
    static contextType = NotefulContext;

    handleDeleteNote = noteId => {
        this.props.history.push('/')
    }
    
    render() {
        const { notes } = this.context;
        const { folderid } = this.props.match.params;
        const filteredNotes = 
            (!folderid) 
            ? notes 
            : notes.filter(note => note.folderId === folderid)
        const notesList = filteredNotes.map(note =>
            <Note key={note.id} noteInfo={note} onDeleteNote={this.handleDeleteNote} />
        );
        return (
            <>
                {notesList}
                <Link to='/add-new-note'>
                    <button className='add-note'>Add Note</button>
                </Link>
            </>
            
        )
    }
}

export default NotesList;