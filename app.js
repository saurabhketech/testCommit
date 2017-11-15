/* eslint-disable*/
const http = require("http");
const express = require("express");

const app = express();
app.server = http.createServer(app);

app.listen(8055);
app.get("/echo/data", function(req, res){
    console.log("hello");
    res.json({data:"hello"})
})
module.exports = app;