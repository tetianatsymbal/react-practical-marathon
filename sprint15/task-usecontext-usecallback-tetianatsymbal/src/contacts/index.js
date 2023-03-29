import React, { useCallback } from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";


const Contacts = ({ contacts, setContacts }) => {

  const addContacts = () => {
    let lastIndex = contacts[contacts.length-1].index;
    setContacts([...contacts, { index: lastIndex+1, channelOption: '', details: '' }]);
  }

  const handleChanelChange = useCallback((index, e) => { 
    setContacts((prevVal) => { 
      prevVal[index]["channelOption"] = e.target.value;
      return [ ...prevVal]
  });
  }, [setContacts]);

  const handleDetailsChange = useCallback((index, e) => {
    setContacts((prevVal) => { 
      prevVal[index]["details"] = e.target.value;
      return [ ...prevVal]
  });
  }, [setContacts]);

  const handleDeleteClick = useCallback((index) => {
    setContacts((prevVal) => { 
      prevVal.splice(index, 1);
      return [ ...prevVal]
    })
  },[setContacts]);

  return (
    <>
      <div className={stylesCenter.channels}>    
        {contacts.map((contact, index) => (
          <ContactItem
            key={contact.index}
            index={index}
            handleChanelChange={handleChanelChange}
            handleDetailsChange={handleDetailsChange}
            handleDeleteClick={handleDeleteClick}
            channelOption={contact.channelOption}
            details={contact.details}
          />
        ))}
      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid="add-button"
          onClick={addContacts}
        >
          <img src="plus.svg" alt="plus logo" />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;