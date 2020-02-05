import React from 'react'



 const SearchBar = ({
     text,
     handleChange
    }) => {
    return (
        <input 
        onChange={(event) => {
            handleChange(event.target.value)
        }}
        value={text} />
    )
}

SearchBar.defaultProps = {
    text: 'this is dfault'
}


export default SearchBar;