const express = require('express');
const userlistRoute = express.Router();
const { Adduserlist } = require('../controllers/userlist');



//method post
userlistRoute = ("/Adduser", Adduserlist)


//method get
//userlistRoute.get('/list', getlist)


//method delete
//userlistRoute.delete('/:id', deleteuser)


//method update
//userlistRoute.put('/:id', userupdated)


//method getone
userlistRoute.get("/:id", getoneuser )

module.exports=userlistRoute