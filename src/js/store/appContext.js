import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
 
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState (prevState => ({
            store: {...prevState.store, ...updatedStore },
            actions: { ...prevState.actions },
          })),
      }));


    useEffect(() => {

		state.actions.getContacts();

		const newContact = {
			name: "Joaquin Morales",
			phone: "214-554-5515",
			email: "Morales95@gmail.com",
			address: "214 Lake June Rd Dallas Tx.",
		};


		if (Array.isArray(state.store.contacts) && state.store.contacts.length === 0) {
			state.actions.addContact(newContact);
			console.log("Contact added");
		}

      const userData = {
        name: "New user",
        phone: "123-455-1543",
        email: "Newuser@gmail.com",
        address: "133 waterwood Dallas, Tx",
      };

	  state.actions.createUser(userData);
	}, [state.actions]);


	console.log("Current State: ", state);


    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
