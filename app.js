const express = require("express");
const mysql = require("mysql")

const app = express();
const port = process.env.PORT || 3001;

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

connection.connect((err)=>{
    if(err){
        throw err
    } else {
        console.log("DB Connected");
    }
})

app.get("/", (req, res) => res.send("Hello API Node Js & Express"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
