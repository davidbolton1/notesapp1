import React from 'react';
const NotesListItem = ({
    title,
    id,
    handleClick
})  => {
    return (
        <li
            onClick={() => {
                console.log(`You clicked ${id}`)
                handleClick(id)
            }}>
            {title}
            </li>
    );
}

export default NotesListItem;