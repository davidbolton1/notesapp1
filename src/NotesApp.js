import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentNoteId: '',
			currentNoteTitle: '',
			searchText: '',
			notes: [
				{
					id: 'an id',
					title: 'first note',
					copy: 'asdf'
				},
				{
					id: 'an id2',
					title: 'second note',
					copy: 'aaddddddddf'
				},
				{
					id: 'an id3',
					title: 'third note',
					copy: 'aa12222321112121212df'
				}
			]
		};
	}
	render() {
		return (
			<div>
				<h1> Best Notes App Ever</h1>
				<NewNote />
				<SearchBar text={this.state.searchText} handleChange={this._setSearchText} />
				<NotesList 
				notes={this._getFilteredNotes()} 
				handleClick={this._selectNote} />
				<NoteEditor
					note={this._getNoteById()}
					handleChange={this._updateNote}
				/>
			</div>
		);
	}

	_getNoteById = () => this.state.notes.find(note => note.id === this.state.currentNoteId) || {}


	_getFilteredNotes = () => {
		const filteredArray = this.state.notes.filter((note) => {
			const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
			const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText.toLowerCase());

			return titleDoesMatch || copyDoesMatch;
		});

		return filteredArray;
	};

	_setSearchText = (searchText) => {
		this.setState(
			{
				//searchText: searchText
				searchText
			},
			() => {
				console.log('New search');
			}
		);
	};

	_selectNote = (currentNoteId) => {
		this.setState(
			{
				currentNoteId
			},
			() => {
				console.log(`${currentNoteId}`);
			}
		);
	};

	_updateNote = (changedNote) => {
		// Alternative
		// const updatedNotesArray = [...this.state.notes];
		// const theIndex = updatedNotesSarray.findIndex(note => note.id == changedNote.id)
		//updatedNotesArray[theIndex] = changedNote
		this.setState ({
			notes: this.state.notes.map(note => {
				if (note.id !== this.state.currentNoteId) {
					return note;
				} else {
					return changedNote;
				}
			})
		}, () => {
			console.log(`Updated ${changedNote.id}`)
		})
		
	}
   
}

export default NotesApp;
