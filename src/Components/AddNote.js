import React from 'react';
import './AddNote.css';
import NotefulContext from '../NotefulContext';

class AddNote extends React.Component {
    static contextType = NotefulContext;

    state = {
        error: null,
    };


    handleNoteSubmit = (e) => {
        e.preventDefault();
        const { noteName, noteContent, noteFolder } = e.target;
        const currentDate = Date();
        this.setState({
            error: null
        })
        if(noteFolder.value === 'Select one...') {
            this.setState({error: 'Please select one of the folders.'})
        } 
        else if (noteName.value === '') {
            this.setState({error: 'Please enter a name.'})
        }
        else {
            const newNote = {
                note_name: noteName.value,
                date_modified: currentDate,                
                folder_id: noteFolder.value,
                content: noteContent.value,
            }
            fetch('https://warm-waters-00071.herokuapp.com/api/notes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newNote)
            })
                .then(res => res.ok ? res.json() : Promise.reject({err: res.status}))
                .then(data => {
                    this.context.addNote(data)
                    this.setState({error: null})
                    this.props.history.push('/')
                })
                .catch(err => this.setState({error: err.message}))
        }
        
    }

    render() {
        const { folders } = this.context;
        const folderOptions = folders.map(folder => {
            return <option key={folder.id} value={folder.id}>{folder.folder_name}</option>
        });
        return (
            <section className='AddNote'>
                <h2>Create a note</h2>
                <form className='new-note-form' onSubmit={e => this.handleNoteSubmit(e)}>
                    <div className='note-form-input'>
                        <label htmlFor='note-name'>Name: </label>
                        <input 
                            type='text'
                            id='note-name'
                            name='noteName'
                            required
                        />
                    </div>
                    <div className='note-form-input'>
                        <label htmlFor='note-content'>Content: </label>
                        <textarea
                            type='text' 
                            id='note-content'
                            name='noteContent'
                        />
                    </div>
                    <div className='note-form-input'>
                        <label htmlFor='note-folder'>Folder: </label>
                        <select id='note-folder' name='noteFolder' required>
                            <option>Select one...</option>
                            {folderOptions}
                        </select>
                    </div>
                    <div className='error-handler'>
                        <h3>{this.state.error}</h3>
                    </div> 
                    <div className='note-form-button'>
                        <button type='submit'>Add Note</button>    
                    </div>                    
                </form>
            </section>
        );
    }
}

export default AddNote;