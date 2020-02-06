import React from 'react';
const NotesListItem = ({
    title,
    id,
    handleClick
})  => {
    return (
        <li
            onClick={() => {
                //console.log(`${title}`)
                handleClick(id)
                //handleClick(title)
            }}>
            {title}
            </li>
    );
}

export default NotesListItem;