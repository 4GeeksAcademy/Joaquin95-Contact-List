import React from 'react';

const ContactCard = ({contact}) => {
    return(
        <div className="contact-card">
            <h3>{contact?.name}</h3>
            <p>{contact?.email}</p>
            <p>{contact?.phone}</p>
            <p>{contact?.address}</p>
            {/* <button onClick={() => onUpdate(contact.id)}>Update</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button> */}
        </div>
    );
};

export default ContactCard;