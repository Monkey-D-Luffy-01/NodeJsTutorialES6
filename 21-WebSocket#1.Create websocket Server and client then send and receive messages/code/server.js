
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
    ws.on('message', receivedMessage => {
        const clientIpAddress = request.connection.remoteAddress;        
        console.log(`Server received: ${JSON.stringify(receivedMessage)}, client Ip: ${clientIpAddress}`);
        // ws.send(`Server received: ${receivedMessage}`);
    });
    ws.send('I am SERVER !. We are in a connection');
});
