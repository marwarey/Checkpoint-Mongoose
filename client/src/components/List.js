import  React ,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { get_contact } from "../redux/actions/ContactAction";
import CardContact from "./CardContact";

function List (){
    const dispatch = useDispatch();
    
    const contacts = useSelector((state)=>  state.ContactReducer.contacts);
    useEffect(()=>{
        dispatch (get_contact());
    }, [contacts]);
    return (
        <div style={{display:'flex', justifyContent:"space-around", flexWrap:"wrap"}}> 
            { contacts &&   contacts.map((contact)=>(
                <CardContact contact={contact} key={contact._id} /> 
            ))} </div>
      
    )
}
export default List