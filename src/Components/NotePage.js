import React from 'react';
import './NotePage.css';
import Note from './Note';
import NotefulContext from '../NotefulContext';

class NotePage extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    handleDeleteNote = noteId => {
        this.props.history.push('/')
    }
    
    render() {
        const { noteid } = this.props.match.params
        const { notes } = this.context
        const matchedNote = notes.find(note => note.id === noteid);
        const { content } = matchedNote;
        return (
            <div>
                <Note noteInfo={matchedNote} onDeleteNote={this.handleDeleteNote}/>
                <div className='note-content'>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}

export default NotePage;