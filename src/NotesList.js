import React from 'react';
import NotesListItem from './NotesListItem';

const NotesList = ({
   notes,
   handleClick
}) => {
    return (
        <ul>
            {
                notes.map(note => 
                    (
                    <NotesListItem 
                    title={note.title} 
                    id={note.id} 
                    key={note.id}
                    handleClick={handleClick}
                    //onClick={() => {handleClick(note.id)}}
                    />
                    )
                )
            }
        </ul>
    )
}

export default NotesList;