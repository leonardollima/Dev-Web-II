const express = require("express")
const app = express()


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})


app.get("/Dev-Web-II", function(req, res){
    res.send("Estou na página do repositório")
})