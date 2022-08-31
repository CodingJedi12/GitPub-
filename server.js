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

//drink names page route
app.get("/drinks", (req, res) => {
    //applies the value of fruits to the allFruits object that we can utilize in index.ejs
    res.render("drinks_index.ejs", {
      allDrinks: drinks,
    })
})

//index drink ID
app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drinkInfo: drinks[req.params.id]
    })
})


////////////////////////
//CAN YOU HEARRRRR MEEEE
////////////////////////
app.listen(3000, () => {
    console.log("Yo we live")
})