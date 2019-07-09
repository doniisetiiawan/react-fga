import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Contacts.css';

class Contacts extends Component {
   state = {
     contacts: [
       {
         id: 1,
         name: 'Carlos Santana',
         email: 'carlos.santana@dev.education',
         phone: '415-307-3112',
       },
       {
         id: 2,
         name: 'John Smith',
         email: 'john.smith@dev.education',
         phone: '223-344-5122',
       },
       {
         id: 3,
         name: 'Alexis Nelson',
         email: 'alexis.nelson@dev.education',
         phone: '664-291-4477',
       },
     ],
   };

  renderSingleContact = ({ name, email, phone }) => (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );

  renderContacts = () => {
    const { contacts } = this.state;

    return (
      <ul>
        {contacts.map((contact, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    console.log(this.props);

    // eslint-disable-next-line react/prop-types
    const { match: { params: { contactId } } } = this.props;
    const { contacts } = this.state;

    let selectedContact = false;

    if (contactId > 0) {
      // eslint-disable-next-line prefer-destructuring
      selectedContact = contacts.filter(
        contact => contact.id === Number(contactId),
      )[0];
    }

    return (
      <div className="Contacts">
        <h1>Contacts</h1>
        {selectedContact
          ? this.renderSingleContact(selectedContact)
          : this.renderContacts()}
      </div>
    );
  }
}

export default Contacts;
