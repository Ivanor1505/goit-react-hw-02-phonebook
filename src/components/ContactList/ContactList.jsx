import { Contact } from "components/Contact/Contact";
import React from "react";


export const ContactList = ({ contacts, onDelete }) => {
  return(
    <ul>
          {contacts.map((contact =>
              <Contact
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                  onDelete={onDelete} />
      ))}
    </ul>
  );
};