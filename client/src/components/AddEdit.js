

import React, { useEffect, useState } from 'react'
import{Form,Button}from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addcontact, editContact } from '../redux/actions/ContactAction'
import {useNavigate} from "react-router-dom" ;
function AddEdit(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState(0)
  const dispatch = useDispatch()

  const  edit = useSelector((state)=> state.ContactReducer.edit);
  const  contact = useSelector((state)=> state.ContactReducer.contact);

   const navigate = useNavigate();
   const handleadd=(e)=>{
     e.preventDefault();
    dispatch(addcontact({name,age,email}));
    navigate("/list");

   };
   const handeleEdit =(e)=>{
     e.preventDefault();

     dispatch(editContact(contact._id,{name,email,age}))
     navigate("/list");

   }
    useEffect(()=>{
    if (edit)  { setName(contact.name);setAge(contact.age);setEmail(contact.email)}
    else {setName("");setAge(0);setEmail("")}
    },[contact])



    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="Name" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control onChange={(e)=>setAge(e.target.value)} value={age} type="number" placeholder="Enter your Age" />
  </Form.Group>

  {edit && edit ? (
  <Button variant='primary' onClick={handeleEdit}> edit contact</Button> ): 
  ( <Button variant="primary" onClick={handleadd}>
      Add a new contact
  </Button> ) }
 
</Form>
        </div>
    )
}
export default AddEdit