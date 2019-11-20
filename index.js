const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");

const routerIndex = require("./routes/index.route");

let port = process.env.PORT || 3000;

server.listen(port, () => console.log("sv run on port",port));

app.use("/publics",express.static(path.join(__dirname,"publics")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"views"));

app.use("/",routerIndex);

io.on("connection",function(socket){
	socket.on("client-send-color",function(data){
		io.emit("server-send-color",data);
	});
});