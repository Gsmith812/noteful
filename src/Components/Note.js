import React from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class Note extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {},
        noteInfo: {},
    }

    static contextType = NotefulContext;

    handleDeleteClicked (e) {
        e.preventDefault();
        const noteId = this.props.noteInfo.id;
        fetch(`http://localhost:8000/api/notes/${noteId}`, {
             method: 'DELETE',
             headers: {
                 'content-type': 'application/json'
             },
         })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(() => {
                this.context.deleteNote(noteId)
                this.props.onDeleteNote(noteId)
            })
            .catch(err => err.message);
    }
    render(){
        const { note_name, date_modified, id } = this.props.noteInfo;
        return (
            <div className="Note">
                <Link to={`/notes/${id}`}><h2>{note_name}</h2></Link>
                <p>Date modified: {moment(date_modified).format('Do MMM YYYY')}<button onClick={e => this.handleDeleteClicked(e)}>Delete Note</button></p>
                
            </div>
        );
    }
}

Note.propTypes = {
    noteInfo: PropTypes.shape({
        id: PropTypes.number,
        note_name: PropTypes.string,
        date_modified: PropTypes.string,
        folder_id: PropTypes.number,
        content: PropTypes.string,        
    }),
    onDeleteNote: PropTypes.func.isRequired
};

export default Note;