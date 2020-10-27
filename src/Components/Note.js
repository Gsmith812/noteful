import React from 'react';
import './Note.css';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

function Note(props) {
    const { name, modified, id } = props.noteInfo;
    return (
        <div className="Note">
            <Link to={`/notes/${id}`}><h2>{name}</h2></Link>
            <p>Date modified: {moment(modified).format('Do MMM YYYY')}<button>Delete Note</button></p>
            
        </div>
    );
}

export default withRouter(Note);