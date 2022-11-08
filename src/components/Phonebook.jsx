import { useState } from "react";

import ContactList from "./ContactsList";
import NewContact from "./NewContact";

export default function Phonebook() {
  const [contacts, setContacts] = useState([]);

  const addNewContact = (contact) => {
    const [firstName, lastName, phoneNumber] = contact;

    if (firstName && phoneNumber) {
      setContacts(
        [...contacts, { firstName, lastName, phoneNumber }].sort((a, b) =>
          a.lastName.localeCompare(b.lastName)
        )
      );
    }
  };

  return (
    <div className="mt-5">
      <h2>Phonebook</h2>
      <NewContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}
