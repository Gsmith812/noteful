import React from 'react';
import './NotePage.css';
import Note from './Note';
import NotefulContext from '../NotefulContext';

class NotePage extends React.Component {
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
        const { noteid } = this.props.match.params
        const { notes } = this.context
        const matchedNote = notes.find(note => note.id === parseInt(noteid));
            
        const { content } = matchedNote ? matchedNote : '';
        return (
            <>
                <Note noteInfo={matchedNote && matchedNote} onDeleteNote={this.handleDeleteNote}/>
                <div className='note-content'>
                    <p>{content && content}</p>
                </div>
            </>
        );
    }
}

export default NotePage;