
const contactSchema = require('../models/contact');




//method post
exports.Addcontact = async(req,res)=>{
    const {name, age, email} = req.body
    try {
        const contact = new contactSchema(req.body);
        const found = await contactSchema.findOne({email});
        if (found){  return res.status(400).send({msg:'count is already exists'})  };
        await contact.save()
       res.status(200).send({contact})
    } catch (error) {
        res.status(500).send({msg:"could not add user to the list"});
    }
}



//method get
exports.getContact = async(req,res)=>{

  try {
     const contact = await contactSchema.find()
        res.status(200).send({msg:"new user is added", contact});
    } catch (error) {
    res.status(500).send({msg:"could not find user ",error});       
    }

}



//method delete
exports.deletecontact = async(req,res)=>{

    try {
        const deleted = await contactSchema.findByIdAndDelete(req.params._id)
        res.status(200).send({msg:"User is deleted", deleted})
   } catch (error) {
        res.status(500).send({msg:"could not delete User"})
    }
    
   }



    //method update 
    exports.contactupdated = async (req,res)=>{

       try {
           const updated = await contactSchema.findByIdAndUpdate(req.params.id, {$set:req.body});
            res.status(200).send({msg: "User updated", updated})
        } catch (error) {
            res.status(500).send({msg:"could not updated", error})
        }
    
   }




    //method get for one user
   exports.getonecontact = async(req,res)=>{

       try {
            const foundcontact = await contactSchema.findById(req.params.id)
            res.status(200).send({msg:"user found", foundcontact})
        } catch (error) {
           res.status(500).send({msg:"could not found", error})
        }
        
        }