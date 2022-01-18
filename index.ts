import { WebSocketServer } from "ws";

let wss = new WebSocketServer({port:8080})

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


