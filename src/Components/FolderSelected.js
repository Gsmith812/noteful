import React from 'react';
import { Link } from 'react-router-dom';
import './FolderSelected.css';

function FolderSelected(props) {
    const folderButtons = props.folders.map(folder => (folder.id === props.selectedFolder.id)
        ?   <Link to={`/folder/${folder.id}`} key={folder.id}>
                <button id={folder.id} className='selected'>{folder.name}</button>
            </Link>
        :   <Link to={`/folder/${folder.id}`} key={folder.id}>
                <button id={folder.id}>{folder.name}</button>
            </Link>
        
    );
    return (
        <div className='FolderSelected'>
            {folderButtons}
            <button className='add-folder'>Add Folder</button>
        </div>
    );
}

export default FolderSelected;