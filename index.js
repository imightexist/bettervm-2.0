//set shit up
const config = require('./config.json');
const express = require('express');
const app = express();
const websocketServer = require('ws').WebsocketServer;
const beta = true;
const version = "BetterVM v2.0.1";
const exec = require('child_process').exec;
const vnc = require('vnc-rfb-client');
const fs = require('fs');
ws = new websocketServer({
  port:config.port
});
function encode(a){
  let encoded = '';
  for (let i = 0; i < a.length, i++){
    encoded = a[i].toString().length + '.' + a[i] + ';';
  }
}

//shitty message
if (beta){console.warn("this is a beta version, expect issues!")};
console.log("Version: " + version);

//webserver
app.use('/',express.static(config.folder));
app.listen(config.port);

//websocket
ws.on('connection',function(f){
  ws.on('chat',function(n){
    f.sendAll(encode(['chat',n]));
  }
});
