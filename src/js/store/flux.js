import AddContact from "../component/AddContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] 
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Joaquin95/contacts")
				.then(
					(resp)=> resp.json()
				)
				.then(
					(data) => setStore ({contacts:data.contacts})
				)
				.catch( 
					(error) => console.log(error, "error getting contacts")
				)
			},
			createUser: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Joaquin95",
					{
						method: "POST", 
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify([
							
						])
					}
				)

			},
			addContact: (contactData) => {
				fetch(
					"https://playground.4geeks.com/contact/agendas/Joaquin95/contacts",
					 {
					method: "POST", 
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(
							{
								"name": contactData.name,
								"phone": contactData.phone,
								"email": contactData.email,
								"address": contactData.address,
							  }
						)
				})
			}
			
		}
	};
};

export default getState;
