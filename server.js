require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();

// Data base connection
connectDB();

// Parse data
app.use(express.json());

// Routes
app.use("/app", require("./routes/userRoutes.js"));



const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    err
      ? console.log("server connection failed")
      : console.log(`server connected successfully on PORT ${PORT}`);
  });
