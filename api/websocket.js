/*
  WEBSOCKET EVENT STYLEGUIDE
  JSON:
  {
    type:"eventType" (message, authenticate, register, findUser, userdata, error)
    body: {
      data:"data" (dependant on type)
    }
  }
*/

const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const user = require('./user.js');
let WSS;

//Initialize websocket
module.exports.CreateServer = function(server){
  WSS = new WebSocket.Server({server});

  //Listen for connections
  WSS.on('connection', (ws, req) => {
    //Initialize connection as alive
    ws.isAlive = true;

    //Listen for ping bounceback (pong)
    ws.on('pong', () => {
      ws.isAlive = true;
    });

    //Listen for 'message' event
    ws.on('message', (message) => {
      console.log('WebSocket server received message: ' + message)

      let messageData = JSON.parse(message);
      let messageEvent = messageData.event;

      switch(messageEvent){
        //Does not require token
        case 'message':
          //Bounce back message events
          ws.send(message);
          break;
        //Does not require token, returns token for use
        case 'authenticate':
          user.Authenticate(messageData.data, (res)=>{
            let jsonData = {event: messageEvent, data: res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
        //Requires a token, verifies user
        case 'verify':
          user.Verify(messageData.data, (res)=>{
            let jsonData = {event: messageEvent, data:res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
        //Does not require token
        case 'register':
          user.Register(messageData.data, (res)=>{
            let jsonData = {event: messageEvent, data: res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
        //Requires token, ignores expiry
        case 'logout':
          user.Logout(messageData.data, (res)=>{
            let jsonData = {event: messageEvent, data: res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
          //Requires token, deletes user
        case 'delete':
          user.Delete(messageData.data, (res) => {
            let jsonData = {event: messageEvent, data: res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
          //Requires token
        case 'searchQuery':
          user.searchQuery(messageData.data, (res)=>{
            let jsonData = { event: messageEvent, data:res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
        //Requires token
        case 'query':
          user.Query(messageData.data, (res)=>{
            let jsonData = {event: messageEvent, data: res }
            ws.send(JSON.stringify(jsonData));
          });
          break;
        default:
          //Response when event is unrecognized
          let jsonData = {event: messageEvent, data: {message: 'Unknown event type'} }
          ws.send(JSON.stringify(jsonData));
          break;
      }
    });

  console.log("Client connected to WebSocket server [" + req.connection.remoteAddress + "]");
  ws.send(JSON.stringify({event:'message', data:{message:'Successfully connected to WebSocket server'}}));
  });

  //Set up ping
  setInterval(() => {
    WSS.clients.forEach((ws) => {
      if(!ws.isAlive){
        return ws.terminate();
      }

      ws.isAlive = false;
      ws.ping(null, false, true);
    });
  }, 120000);

}
