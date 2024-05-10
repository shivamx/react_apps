import React from "react";
import ContactCard from "./ContactCard"
import contacts from "./../contacts"

function createCard(contact) {
  return (
    <ContactCard
      key={contact.phone} //special property to decide order of component, cannot used as prop
      name={contact.name} 
      imgURL={contact.imgURL} 
      phone={contact.phone} 
      email={contact.email}></ContactCard>
  );
}

function App() {
  return (
    <div>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
