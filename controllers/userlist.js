
const userlistSchema = require('../models/userlist');




//method post
exports.Adduserlist = async(req,res)=>{
    const {name, age, email} = req.body,
    try {
        const userlist = new userlistSchema(req.body);
        const found = await userlistSchema.findOne({email});
        if (found){  return res.status(400).send({msg:'count is already exists'})  };
        await userlist.save()
       res.status(200).send({userlist})
    } catch (error) {
        res.status(500).send({msg:"could not add user to the list"});
    }
}



//method get
//exports.getlist = async(req,res)=>{

 //   try {
//        const userlist = await userlistSchema.find()
  //      res.status(200).send({msg:"new user is added", userlist})
 //   } catch (error) {
  //  res.status(500).send({msg:"could not find user "})       
  //  }

//}



//method delete
//exports.deleteuser = async(req,res)=>{

  //  try {
  //      const deleted = await userlistSchema.findByIdAndDelete(req.params._id)
   //     res.status(200).send({msg:"User is deleted", deleted})
  //  } catch (error) {
     //   res.status(500).send({msg:"could not delete User"})
  //  }
    
   // }



    //method update 
   // exports.Userupdated = async (req,res)=>{

     //   try {
      //      const updated = await userlistSchema.findByIdAndUpdate(req.params.id, {$set:req.body});
     //       res.status(200).send({msg: "User updated", updated})
      //  } catch (error) {
      //      res.status(500).send({msg:"could not updated", error})
      //  }
    
   // }




    //method get for one user
  //  exports.getoneuser = async(req,res)=>{

      //  try {
      //      const founduser = await userlistSchema.findById(req.params.id)
     //       res.status(200).send({msg:"user found", founduser})
       // } catch (error) {
    //        res.status(500).send({msg:"could not found", error})
    //    }
        
     //   }