import { Component } from 'react';
import { AddContactForm } from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }
  // console.log(this.state)
  
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...newContact,
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <AddContactForm onAdd={this.addContact}/>
      </div>
    );
  };
}

