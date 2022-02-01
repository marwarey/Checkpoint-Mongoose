const mongoose = require('mongoose')

 const ConnectDb = async ()=>{
   try {
    await mongoose.connect(process.env.MONGO)
    console.log('db connected')
   } catch (error) {
     console.log('Database is not Connected')
   }
 }

 module.exports = ConnectDb