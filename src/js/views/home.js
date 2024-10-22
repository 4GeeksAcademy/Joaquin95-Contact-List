import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard";
import { Context } from "../store/appContext";

const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getContacts(); 
  }, [actions]);

  return (
    <div className="text-center mt-5">
      {store.contacts.length > 0 ? (
        store.contacts.map((contactData, i) => (
          <div key={i}>
            {" "}
            {/* Add key for each contact */}
            <ContactCard contact={contactData} />
          </div>
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Home;
