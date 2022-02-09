const express = require('express');
const contactRoute = express.Router();
const { Addcontact, deletecontact } = require('../controllers/contact');



//method post
ContactRoute = ("/Addcontact", Addcontact)


//method get
contactRoute.get('/contact', getcontact)


//method delete
contactRoute.delete('/:id', deletecontact)


//method update
contactRoute.put('/:id', updatecontact)


//method getone
userlistRoute.get("/:id", getonecontact )

module.exports=contactRoute