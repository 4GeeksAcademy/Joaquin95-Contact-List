import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = { name, email, phone };

    await fetch('https://api-url.com/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });


    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
