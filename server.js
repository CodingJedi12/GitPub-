////////////////////////
//REQUIRE DEPENDENCIES
////////////////////////
const express = require('express');
const drinks = require("./models/drinks.js")

////////////////////////
//INITIALIZING EXPRESS APP
////////////////////////
const app = express();


////////////////////////
//DECLARE ROUTES
////////////////////////

//welcome page/landing page
app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!")
})

//drinks json page
app.get("/drinks", (req, res) => {
    res.send(drinks)
})
////////////////////////
//CAN YOU HEARRRRR MEEEE
////////////////////////
app.listen(3000, () => {
    console.log("Yo we live")
})