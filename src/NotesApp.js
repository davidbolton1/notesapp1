import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar'



class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            searchText: 'this is the search text',
            notes: [
                {
                    id: 'an id',
                    title: 'first note',
                    copy: 'asdf'
                },
                {
                    id: 'an id2',
                    title: 'second note',
                    copy: 'aadf'
                },
                {
                    id: 'an id3',
                    title: 'second note',
                    copy: 'aadf'
                }
            ]
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
                <NotesList 
                    notes={this.state.notes}
                />
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