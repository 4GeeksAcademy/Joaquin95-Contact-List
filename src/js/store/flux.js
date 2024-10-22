const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            getContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/Joaquin95/contacts")
                    .then((resp) => resp.json())
                    .then((data) => setStore({ contacts: data.contacts }))
                    .catch((error) => console.error("Error getting contacts:", error));
            },
            createUser: (userData) => {
                fetch("https://playground.4geeks.com/contact/agendas/Joaquin95/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                })
                    .then(response => response.json())
                    .then(data => console.log("User created successfully:", data))
                    .catch((error) => console.error("Error creating user:", error));
            },
            addContact: (contactData) => {
                fetch("https://playground.4geeks.com/contact/agendas/Joaquin95/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                })
                    .then((resp) => resp.json())
                    .then((newContact) => {
                        setStore((prevStore) => ({
                            contacts: [...prevStore.contacts, newContact],
                        }));
                    })
                    .catch((error) => console.error("Error adding contact:", error));
            },
            updateContact: (id, contactData) => {
                fetch(`https://playground.4geeks.com/contact/agendas/Joaquin95/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                })
                    .then((resp) => resp.json())
                    .then((updatedContact) => {
                        setStore((prevStore) => ({
                            contacts: prevStore.contacts.map((contact) => 
                                contact.id === id ? updatedContact : contact
                            ),
                        }));
                    })
                    .catch((error) => console.error("Error updating contact:", error));
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/Joaquin95/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        setStore((prevStore) => ({
                            contacts: prevStore.contacts.filter((contact) => contact.id !== id),
                        }));
                    })
                    .catch((error) => console.error("Error deleting contact:", error));
            },
        },
    };
};

export default getState;
