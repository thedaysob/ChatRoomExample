//Daeseob Lim
//2/18/2019
//Chat Room Response

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Gets index.html file from my directory and displays it 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Connects client with server
io.on('connection', function(socket){
  console.log('a user connected');

  //Sends message
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});