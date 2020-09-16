const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/api/employeeRoutes")

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware 
//================================================
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
//===============================================
app.use(routes);

//Mongo Database connection
//===============================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrmanagement", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//Server Port connection
//=================================================
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

