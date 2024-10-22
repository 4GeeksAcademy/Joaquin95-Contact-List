import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateContact = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [contact, setContact] = useState({ full_name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    
    const fetchContact = async () => {
      let response = await fetch(`https://playground.4geeks.com/contact/${id}`);
      let data = await response.json();
      setContact(data);
    };
    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://playground.4geeks.com/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    navigate("/"); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="full_name" value={contact.full_name} onChange={handleChange} />
      <input type="email" name="email" value={contact.email} onChange={handleChange} />
      <input type="phone" name="phone" value={contact.phone} onChange={handleChange} />
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default UpdateContact;
