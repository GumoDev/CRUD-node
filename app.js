const express = require("express")
const mysql = require("mysql")

const app = express();
const port = 3306

app.listen(port || 0, ()=>{
    console.log("api works server listenning at localhost: " + port);
})

app.get("/", (req, res)=>{
    res.send("Hello API")
})


   




