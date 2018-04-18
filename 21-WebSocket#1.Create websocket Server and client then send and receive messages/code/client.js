const WebSocket = require('ws');
var fakeObjects = require('./objectList');
var x = [
    1,2,3
];
const websocketClient = new WebSocket('ws://Nguyens-iMac.local:8082', {
    perMessageDeflate: false, //default is "enabled" at client
});

websocketClient.on('open', () => {
    //send strings to server
    // var i = 0;
    // setInterval(() => {
    //     i = i + 1
    //     websocketClient.send(`${i} .I am CLIENT !`);
    // }, 1000);
    //send binary, cannot send array of objects
    websocketClient.send([{name: 'hoang', email: 'sunlight4d@gmail.com'}]);   //Cannot send ! 
    websocketClient.send(["hello","world"]);   //Cannot send ! 
    websocketClient.send([1,2,3,4,5]);   //send OK !
});

websocketClient.on('message',receivedData => {
    console.log(`Client received: ${receivedData}`);
});