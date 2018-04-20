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
    var objectsToSend = [{ name: 'hoang1', email: 'email1@gmail.com' }, { name: 'hoang2', email: 'email2@gmail.com' }];
    // websocketClient.send(BSON.serialize(objectsToSend));           
    websocketClient.send(JSON.stringify(objectsToSend));//good
    // websocketClient.send([1,2,3,4,5]);   //send OK !
});

websocketClient.on('ping', receivedData => {
    console.log(`After ping, Client received: ${receivedData}`);
});

websocketClient.on('message',receivedData => {
    console.log(`Client received: ${receivedData}`);
});