const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");// passport package
const session = require("express-session");//express auth session
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware 
//================================================
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Needed for deployment heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({
  secret: "secretcode",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
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
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrmanagement", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
//Server Port connection
//=================================================
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

