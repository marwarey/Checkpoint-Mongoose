

const express = require("express");
const ConnectDb = require("./config/connectDb");
const app = express();
require('dotenv').config()
// Data base connection
ConnectDb();
// Parse data
app.use(express.json());

// Routes
//app.use("/app", require("./routes/userRoutes.js"));





app.listen(process.env.PORT, ()=>console.log('server running'));
