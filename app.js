var express = require('express'),
    http = require('http');

var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
var server = http.createServer(app).listen(8000);

var io = require('socket.io').listen(server);  // Your app passed to socket.io

io.on('connection', function (socket) {
  console.log('[USER] - A user has connected.');

  socket.on('unamee', function(uname) {
    console.log('[USER] - ' + 'User ' + uname + ' has joined.');
  });
});


