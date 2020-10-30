import React from 'react';
import NotefulContext from '../NotefulContext';
import Note from './Note';

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
            <Note key={note.id} noteInfo={note} folderId={note.folderId} onDeleteNote={this.handleDeleteNote} />
        );
        return (
            <>
                {notesList}
            </>
            
        )
    }
}

export default NotesList;