import React from 'react';
import { render } from '@testing-library/react';


class NoteEditor extends React.Component {
    constructor(props){
        super(props);
  
    this.state = {
        changedNote: {
            
        }
    }
}
//Receiving the new props and the existing state
static getDerivedStateFromProps(props, state) {
    // Return the new version of state
    if (props.note.id === state.changedNote.id) {
        return {
            ...state
        }
    }
    return {
        ...state,
        changedNote: {
            ...props.note
        }
    }
}
    
    render() {
        const {
            note,
            handleChange
        } = this.props;

        return (
            <div>
                <input 
                    value={this.state.changedNote.title} 
                    onChange={(event) => {
                        // NOOOOOOOOO!
                        // Don't mutate an object or array
                        // that you receive as an argument.
                        // note.title = event.target.value;  
                        
                        // Instead, send back a copy
                        // with the updated "title" 
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            title: event.target.value
                        });
                    }}
                />
                <br />
                <textarea 
                    value={this.state.changedNote.copy} 
                    onChange={(event) => {
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            copy: event.target.value
                        });
                    }}
                />
            </div>
        );
    }

    _updateLocalNote = (changedNote) => {
        this.setState({
            changedNote
        });
    }
}

export default NoteEditor;