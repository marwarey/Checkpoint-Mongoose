
import axios from "axios";
import { GET_CONTACT, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes";
export const get_contact= ()=> async (dispatch)=>{
 try {
     const res = await axios.get("/contact");
     dispatch({type:GET_CONTACT, payload:res.data});
 } catch (error) {
    console.log(error) ;
 }


};
export const addcontact=(newcontact)=> async (dispatch)=>{
    try {
        await axios.post('/contacts/addcontact',newcontact)
        dispatch(get_contact())
    } catch (error) {
        console.log(error);
        
    }
};
export const deletecontact=(id) => async (dispatch)=>{
    try {
        await axios.delete(`/contacts/${id}`)
        dispatch(get_contact())
    } catch (error) {
        console.log(error);
        
    }
}
export const editContact=(id,data)=>async (dispatch)=>{
    try {
        await axios.put(`/contacts/${id}`,data)
        dispatch(get_contact())

    } catch (error) {
        console.log(error);
        
    }
}
export const togglefalse =()=>{
    return {type:TOGGLE_FALSE};
};
export const toggletrue=()=>{
    return {type:TOGGLE_TRUE};
};
export const getonecontact=(id)=>async (dispatch)=>{
    try {
        const res= await axios.get(`/contact/${id}`)
        dispatch({type:GET_CONTACT,payload: res.data})
    } catch (error) {
        console.log(error);
    }
}