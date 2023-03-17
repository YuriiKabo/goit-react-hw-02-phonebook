import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    text: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    this.setState({ contacts: [data, ...this.state.contacts] });
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleSearchInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.filterSearch();
  };

  filterSearch = () => {
    this.setState({
      contacts: this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.text.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <div>
          <label>
            <p>Find contacts by name</p>
            <input
              type="tel"
              name="text"
              required
              value={this.state.text}
              onChange={this.handleSearchInputChange}
            />
          </label>
        </div>
        <div>
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>
                <span>{name}: </span>
                <span>{number}</span>
                <button type="button" onClick={() => this.handleDelete(id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
