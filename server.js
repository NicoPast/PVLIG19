let express = require('express');
const app = express(); // servidor de aplicaciones
const http = require('http').createServer(app); // servidor HTTP
const io = require('socket.io').listen(http); // Importamos `socket.io`

const port = 3000; // El puerto
let fieldAg = null;
let infoAg = null;
var clients = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Pages/index.html');
});
app.get('/Pages/inputText.html', function(req, res){
  res.sendFile(__dirname + '/Pages/inputText.html');
});

// app.get('/ImgPages/Client/borrar1.jpg' , function(req, res){
//   res.sendFile(__dirname + '/ImgPages/Client/borrar1.jpg');
// });
// app.get('/ImgPages/Client/borrar2.jpg' , function(req, res){
//   res.sendFile(__dirname + '/ImgPages/Client/borrar2.jpg');
// });
// app.get('/ImgPages/Client/borrar3.jpg' , function(req, res){
//   res.sendFile(__dirname + '/ImgPages/Client/borrar3.jpg');
// });
// app.get('/ImgPages/Client/borrar4.jpg' , function(req, res){
//   res.sendFile(__dirname + '/ImgPages/Client/borrar4.jpg');
// });
// app.get('/ImgPages/Client/borrar4.jpg' , function(req, res){
//   res.sendFile(__dirname + '/ImgPages/Client/borrar4.jpg');
// });




app.use('/Assets/', express.static('Assets'))
app.use('/Code/', express.static('Code'))
app.use('/Pages/', express.static('Pages'))
app.use('/ImgPages/', express.static('ImgPages'))

io.on('connection', socket => {
  console.log('a user connected');
  clients.push(socket); // metemos el socket en el array

  socket.on('disconnect', () => {
    console.log('a user disconnected');
    clients.splice(clients.indexOf(socket), 1); // lo sacamos del array
  });

  socket.on('services', servicio => {
    // para enviar algo, usamos `emit`
    // que tiene un nombre de mensaje,
    // y un objeto
    console.log( 'service sended of type ' + servicio);
    if(fieldAg != null) fieldAg.emit('service', servicio);
    else if(infoAg != null) infoAg.emit('problem', 'Error, no hay jugador conectado');
  });

  socket.on('relic', name => {
    // para enviar algo, usamos `emit`
    // que tiene un nombre de mensaje,
    // y un objeto
      console.log(' reliquia : ' + name);
    if(fieldAg != null) fieldAg.emit('relic', name);
    else if(infoAg != null) infoAg.emit('problem', 'Error, no hay jugador conectado');
  });

  socket.on('holyWater', HolyWaterSend => {
    // para enviar algo, usamos `emit`
    // que tiene un nombre de mensaje,
    // y un objeto
    console.log( 'send water with this configuration: ' + HolyWaterSend.SaintHair + " " + HolyWaterSend.CrossPiece + " " + HolyWaterSend.SacredText + " " + HolyWaterSend.candleWax);
    if(fieldAg != null) fieldAg.emit('holyWater', HolyWaterSend);
    else if(infoAg != null) infoAg.emit('problem', 'Error, no hay jugador conectado');
  });

  socket.on('identify', name => {
    console.log('a ' + name + ' has connected');
    if(name == 'field agent' && fieldAg == null) 
      fieldAg = socket;
    else if(infoAg == null) infoAg = socket;
  })

  socket.on('leave', name => {
    console.log (name + ' disconnected');

    if(name == 'field agent' && fieldAg != null)
      fieldAg = null;
    else if(infoAg != null) infoAg = null;
  });
});

// Creación del servidor en sí (por HTTP)
http.listen(port, () => {
  console.log('Servidor escuchando en el puerto', port);
});

