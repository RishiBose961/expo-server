const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
//! Connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//! Middlewares
app.use(express.json()); //pass incoming json data from the user
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);

app.get('/',(req, res) => {
  res.send('server is working')
})

//! Start the server
const port =   process.env.PORT || 8000;
app.listen(port, console.log(`Server is up and running ${port}`));
