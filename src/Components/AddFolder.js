import React from 'react';
import './AddFolder.css';
import NotefulContext from '../NotefulContext';

class AddFolder extends React.Component {
    static contextType = NotefulContext;

    state = {
        error: null,
    };

    handleAddFolder(e) {
        e.preventDefault();
        const newFolderName = e.target.folderName.value;
        const newFolderId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
        const newFolder = {folder_id: newFolderId, folder_name: newFolderName};
        fetch('https://warm-waters-00071.herokuapp.com/api/folders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFolder)
        })
            .then(res => res.ok ? res.json() : Promise.reject({err: res.status}))
            .then(data => {
                this.props.history.push('/')
                this.context.addFolder(data)
            })
            .catch(err => this.setState({error: err.message}));
    }

    render() {
        return (
            <section className='add-folder'>
                <h2>Create a folder</h2>
                <form className='add-folder-form' onSubmit={e => this.handleAddFolder(e)}>
                    <label htmlFor='folder-name'>Folder Name: </label>
                    <input
                        type='text'
                        id='folder-name'
                        name='folderName'
                        required
                    />
                    <button type='submit'>Add Folder</button>                        
                </form>
            </section>
        );
    }
}

export default AddFolder;