import { WebSocketServer } from "ws";


let host = '127.0.0.1'
let wss = new WebSocketServer({host:host, port:8080})


wss.on('connection', (ws, req) => {
    console.log("连接成功");

    ws.on('message', (data) =>{
        console.log('data = ' + data);
        
    })

    ws.on('close', (data) =>{
        console.log('close = ' + data);
        
    })

    ws.on('error', (data) =>{
        console.log('error = ' + data);
        
    })
    
})


