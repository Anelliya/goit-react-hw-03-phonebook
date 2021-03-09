import React, { Component } from 'react'
import generateUniqueId from 'generate-unique-id'

import styles from './styles/PhoneBook.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
}

class ContactForm extends Component {

    state = INITIAL_STATE;

    sendContactToApp(newContact) {
        this.props.handleSubmit(newContact);
    }

    showMessage(newContactDate) {
        alert(`${newContactDate.name} already in contacts`);
    }

    resetState() {
        this.setState(INITIAL_STATE)
    }

    createNewContact() {
        return {
            id: generateUniqueId(),
            ...this.state,
        }
    }

    handleNewValue = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value,
        })
    }

    handleNewContact = () => {
        const newContactDate = this.state;
        const contacts = this.props.contacts;
        const checkedName = contacts.find(el => el.name.toLowerCase() === newContactDate.name.toLowerCase())

        if (!checkedName) {
            let newContact = this.createNewContact();
            this.sendContactToApp(newContact);
        } else {
            this.showMessage(newContactDate);
        }
        this.resetState();
    }

    render() {

        return (
            <form className={styles.form}>
                <label key='name' className={styles.label}>
                    <input type="text" key='name' name='name'
                        value={this.state.name} onChange={this.handleNewValue}
                        className={styles.input} />
                </label>
                <label key='number' className={styles.label}>
                    <input type="text" key='number' name='number'
                        value={this.state.number} onChange={this.handleNewValue}
                        className={styles.input} />
                </label>
                <button onClick={this.handleNewContact}
                    disabled={!this.state.name || !this.state.number}
                    className={styles.btn}>Add contact</button>
            </form >
        )
    }

}

export default ContactForm;