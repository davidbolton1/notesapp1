import React from 'react';

const NoteEditor = ({
    title,
    note

}) => {
    console.log(title)
    return (
        <div>
        <input value = {note.title} />
        <br />
        <textarea value={note.copy} />
        </div>
    )
}

export default NoteEditor;