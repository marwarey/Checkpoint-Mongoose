const express = require('express');
const contactRoute = express.Router();
const { Addcontact, deletecontact , getContact,contactupdated,getonecontact} = require('../controllers/contact');



//method post
contactRoute.post("/Addcontact", Addcontact)


//method get
contactRoute.get('/contact', getContact)


//method delete
contactRoute.delete('/:id', deletecontact)


//method update
contactRoute.put('/:id', contactupdated)


//method getone
contactRoute.get("/:id", getonecontact )

module.exports=contactRoute