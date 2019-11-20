const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");

let port = process.env.PORT || 3000;

server.listen(port, () => console.log("sv run on port ",port));

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"views"));

app.get("/",function(req,res){

});