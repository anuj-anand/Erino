import React, { useState } from "react";
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

import { Container } from "@mui/material";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (contactToDelete) => {
    setContacts(contacts.filter((contact) => contact.email !== contactToDelete.email));
  };

  return (
    <Container>
      <ContactForm onSubmit={handleAddContact} />
      <ContactsTable
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
    </Container>
  );
};

export default App;

