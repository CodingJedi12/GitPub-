////////////////////////
//REQUIRE DEPENDENCIES
////////////////////////
const express = require('express');


////////////////////////
//INITIALIZING EXPRESS APP
////////////////////////
const app = express();


////////////////////////
//DECLARE ROUTES
////////////////////////
app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})
////////////////////////
//CAN YOU HEARRRRR MEEEE
////////////////////////
app.listen(3000, () => {
    console.log("Yo we live")
})