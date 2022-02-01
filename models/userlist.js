const mongoose = require("mongoose");


const userlist =   new mongoose.Schema( {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email:{
    type:String, unique:true, required:true
  },
 
});

module.exports  = mongoose.model("userlist", userlist);