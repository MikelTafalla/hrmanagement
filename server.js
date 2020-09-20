const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes")
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware 
//================================================
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
//===============================================
app.use(routes);

//Mongo Database connection
//===============================================

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://shalim:Shajee123!@veiramal.ehpyu.mongodb.net/hrmanagement?retryWrites=true&w=majority", {
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

