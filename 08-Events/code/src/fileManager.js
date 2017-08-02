/**
 * Created by hoangnd on 7/31/17.
 */
const fs = require('fs');
module.exports = {
    createNewFile: (fileName) => {
        const fd = fs.openSync(fileName, 'w');//fd = file descriptor
    },
    saveJsonObjectToFile: (obj, fileName) => {
        const jsonString = JSON.stringify(obj);
        fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(`Saved to file ${fileName}`);
        });
    },
    readJsonObjectFromFile: (fileName) => {
        //Asynchronously reads the entire contents of a file
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            let jsonObject = JSON.parse(data);
            console.log(`jsonObject = ${JSON.stringify(jsonObject.foods)}`);
        });
    }
}