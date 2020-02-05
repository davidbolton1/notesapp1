import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar'



class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            searchText: 'this is the search text'
        }
    }
    render() {
        return (
            <div>
                <h1> Best Notes App Ever</h1>
                <NewNote />
                <SearchBar
                text={this.state.searchText}
                handleChange={this._setSearchText}
                 />
                <NotesList />
                <NoteEditor />
                
            </div>
        )
    }

    _setSearchText = (searchText) => {
        this.setState({
            //searchText: searchText
            searchText
        }, () => {
            console.log('New search')
        })
    }
}

export default NotesApp;