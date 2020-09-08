const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware 
//================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrmanagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
// app.use(routes);

//Server 
//=================================================
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

