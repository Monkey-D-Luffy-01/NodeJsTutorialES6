
const WebSocket = require('ws');
const http = require('http');
const PORT = 8082
//create a server object:
const server = http.createServer((request, response) => {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(PORT); //the server object listens on port 8080

const websocketServer = new WebSocket.Server({
    // port: PORT,    
    server: server
});

websocketServer.on('connection', (ws, request) => {    
    ws.isAlive = true;
    ws.on('pong', () => {
        this.isAlive = true;                
    });
    ws.on('message', receivedMessage => {
        const clientIpAddress = request.connection.remoteAddress;                
        try {
            debugger;            
            console.log(`Server received: ${JSON.parse(receivedMessage)}, client Ip: ${clientIpAddress}`);                        
        } catch (ex) {
            console.log(`Server received: ${receivedMessage}, client Ip: ${clientIpAddress}`);                        
        }        
        // ws.send(`Server received: ${receivedMessage}`);
    });
    ws.send('I am SERVER !. We are in a connection');
});
//Check clients each 30 seconds. Automatically set isAlive=false 
setInterval(() => {    
    websocketServer.clients.forEach(ws => {
        if (ws.isAlive === false) return ws.terminate();
        ws.isAlive = false;        
        ws.ping(() => {
            console.log('ping again after 30 seconds');
        });
    });
}, 10000);

// Broadcast to all
websocketServer.broadcast = (data) => {
    websocketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};
