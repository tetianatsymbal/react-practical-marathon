import React, {useState} from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();

function App() {
  
  const [contacts, setContacts] = useState([
    { index: 0, channelOption: '', details: '' }
  ]);
 
  const value = {
    contacts,
    setContacts
  };
  return (
    <ContactContext.Provider value={value}>
      <div className="grid-container">
        <div>
          <Contacts contacts={contacts} setContacts={setContacts} />
        </div>
        <div>       
          <Logo />
        </div>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
