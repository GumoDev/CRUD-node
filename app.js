const express = require("express");
const mysql = require("mysql")

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello API Node Js & Express" + port));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
