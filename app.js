const express = require("express")
const mysql = require("mysql")

const app = express();
const port = 3306

app.listen(port || 0, ()=>{
    console.log("api works server listenning at localhost: " + port);
})

const connection = mysql.createConnection({
    host: "dpg-ce7p3nh4rebbibj17np0-a",
    database: "node_h04s",
    user: "root",
    password: "rhiP5jSyrju9b5ZE70tv9VyumyJL7kPT",
})
connection.connect((err)=>{
    if(err){
        throw err
    } else {
        console.log("DB Connected");
    }
})
app.get("/", (req, res)=>{
    res.send("Hello API")
})


   




