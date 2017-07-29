/**
 * Created by hoangnd on 7/27/17.
 * HTTP module
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
var http = require('http');
var url = require('url');

const server = http.createServer((request, response) => {
    const ip = request.socket.remoteAddress;
    const port = request.socket.remotePort;
    response.end(`Your IP address is ${ip} and port: ${port}.`);
}).listen(3001);

http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false  // create a new agent just for this one request
}, (res) => {

});


        




