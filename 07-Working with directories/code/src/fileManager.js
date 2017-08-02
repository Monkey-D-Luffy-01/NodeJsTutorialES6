/**
 * Created by hoangnd on 8/2/17.
 */
const fs = require('fs');
module.exports = {
    listJPGFiles: (folderName) => {
        fs.readdir(folderName, (err, files) => {
            files.forEach(file => {
                console.log(file);
            });
        })
    }
};
