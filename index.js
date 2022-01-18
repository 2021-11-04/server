"use strict";
exports.__esModule = true;
var ws_1 = require("ws");
var host = '127.0.0.1';
var wss = new ws_1.WebSocketServer({ host: host, port: 8080 });
wss.on('connection', function (ws, req) {
    console.log("连接成功");
    ws.on('message', function (data) {
        console.log('data = ' + data);
    });
    ws.on('close', function (data) {
        console.log('close = ' + data);
    });
    ws.on('error', function (data) {
        console.log('error = ' + data);
    });
});
