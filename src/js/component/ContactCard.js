import React from 'react';

const ContactCard = ({contact, onDelete, onUpdate}) => {
    return(
        <div className="contact-card">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={() => onUpdate(contact.id)}>Update</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
};

export default ContactCard;