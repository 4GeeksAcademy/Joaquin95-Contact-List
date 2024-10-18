import React, {useContext} from "react";
import "../../styles/home.css";
import ContactCard from "../component/ContactCard";
import { Context } from "../store/appContext";


export const Home = () => 
	 {
		const {actions, store} = useContext(Context)
		return (
	<div className="text-center mt-5">
		{
			store.contacts.length > 0 ?
			store.contacts.map(
				(contactData, i )=>{
					return(
						<div> 
							<ContactCard contact={contactData} />
						</div>
					)
				}
			) 
			:
			"no contacts"
		}
	</div>
);}
