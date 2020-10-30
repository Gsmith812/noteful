import React from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NotefulContext from '../NotefulContext';

class Note extends React.Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }

    static contextType = NotefulContext;

    handleDeleteClicked (e) {
        e.preventDefault();
        const noteId = this.props.noteInfo.id;
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject({error: res.status}))
            .then(() => {
                this.context.deleteNote(noteId)
                this.props.onDeleteNote(noteId)
            })
            .catch(err => err.message);
    }
    render(){
        const { name, modified, id } = this.props.noteInfo;
        return (
            <div className="Note">
                <Link to={`/notes/${id}`}><h2>{name}</h2></Link>
                <p>Date modified: {moment(modified).format('Do MMM YYYY')}<button onClick={e => this.handleDeleteClicked(e)}>Delete Note</button></p>
                
            </div>
        );
    }
}

export default Note;