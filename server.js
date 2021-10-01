const express = require("express");

const app = express();

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: false}))

app.use(express.json())


const user = require("./models/user.model")

user.sync()

app.listen(8081, ()=>{

    console.log("App is running on http://localhost:8081")
})

