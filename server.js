const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Passport Authentication???
//================================================
const cors = require("cors");// cors auth for routes
const passport = require("passport");// passport package
const cookieParser = require("cookie-parser");// cookie storing
const session = require("express-session");//express auth session

// Middleware 
//================================================
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", //<-- location of react app connected to
  credentials: true
}));

app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig/passportConfig")(passport);

// Routes
//===============================================
app.use(routes);

//Mongo Database connection
//===============================================

// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://shalim:Shajee123!@veiramal.ehpyu.mongodb.net/hrmanagement?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
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

