import React, { Component } from 'react'

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from './components/Filter';

import styles from './components/styles/PhoneBook.module.css'
import './App.css';



class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (window.localStorage.getItem('contacts')) {
      this.setState({
        contacts: savedContacts
      })
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  handleAddContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }))
  }

  handleFilterValue = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  handleDeleteContact = id => {
    this.setState(prevState =>
      ({ contacts: prevState.contacts.filter(el => el.id !== id) }))
  }

  render() {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(normolizedFilter)))

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleAddContact} contacts={contacts} />
        <h2>Contacts: </h2>
        <Filter handleCnange={this.handleFilterValue} filterList={filter} />
        <ContactList contactsList={filteredContacts} handleClick={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;

