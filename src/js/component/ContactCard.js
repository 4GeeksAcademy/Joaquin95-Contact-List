import React, {useContext} from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../store/appContext';

const ContactCard = ({contact}) => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    

    const handleUpdate = () => {
        navigate(`/update-contact/${contact.id}`);
    };

    const handleDelete = async () => {
        actions.deleteContact(contact.id);
      };

    return(
        <div className="contact-card">
            <h3>{contact?.name}</h3>
            <p>{contact?.email}</p>
            <p>{contact?.phone}</p>
            <p>{contact?.address}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ContactCard;