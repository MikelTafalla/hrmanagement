const express = require("express");
const mongoose = require("mongoose");
const { urlencoded } = require("express");

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware 
//================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hrmanagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


//Server 
//=================================================
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

