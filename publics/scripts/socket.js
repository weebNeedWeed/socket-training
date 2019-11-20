$(function(){
	const socket = io();
	// $("#lmao").on("click",function(){
	// });
	$("#red,#green,#blue").click(function(){
		socket.emit("client-send-color",$(this).text());
	});
	socket.on("server-send-color",function(data){
		$("body").css({"background-color": data});
	});
});