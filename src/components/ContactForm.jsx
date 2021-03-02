import React, { Component } from 'react'
import generateUniqueId from 'generate-unique-id'


import styles from './styles/PhoneBook.module.css'

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    sendContactToApp(newContact) {
        this.props.handleSubmit(newContact);
    }

    showMessage(newContactDate) {
        alert(`${newContactDate.name} already in contacts`);
    }

    resetState() {
        this.setState({
            name: '',
            number: '',
        })
    }

    createNewContact() {
        return {
            id: generateUniqueId(),
            ...this.state,
        }
    }

    handleNewValue = (ev) => {
        const { value, name } = ev.target;
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
        const inputNames = this.props.options;

        return (
            <form className={styles.form}>
                {inputNames.map(inputName => (
                    <label key={inputName} className={styles.label}>
                        {inputName}
                        <input type='text' key={inputName} name={inputName} value={this.state[inputName]} onChange={this.handleNewValue} className={styles.input} />
                    </label>
                ))}
                <button onClick={this.handleNewContact} disabled={!this.state.name || !this.state.number} className={styles.btn}>Add contact</button>
            </form >
        )
    }

}

export default ContactForm;