import React from 'react';
import NotefulContext from '../NotefulContext';
import './NotesNav.css';

class NotesNav extends React.Component {
    static defaultProps = {
        history: {},
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    render() {
        const { folders, notes } = this.context;
        const { noteid } = this.props.match.params;
        const matchedNote = notes.find(note => note.id === noteid);
        const folder = folders.find(folder => matchedNote && folder.id === matchedNote.folder_id);
        return (
            <div className='NotesNav'>
                <button onClick={() => this.props.history.goBack()}>Go Back</button>
                {folder && (<h2>{folder.folder_name}</h2>)}
            </div>
        );
    }
}

export default NotesNav;