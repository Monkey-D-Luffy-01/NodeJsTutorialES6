/**
 * Created by hoangnd on 8/2/17.
 */
const fs = require('fs');
module.exports = {
    listJPGFiles: (folderName) => {
        fs.readdir(folderName, (err, fileNames) => {
            if(err) throw err;
            debugger;
            fileNames.forEach(fileName => {
                fs.
                fs.stat('./' + fileName, (err, stats) => {
                    if(err) {
                        debugger;
                    }
                    debugger;
                    console.log(`file = ${require('util').inspect(stats, {showHidden: false, depth: null})}`);
                    var fileExtension = fileName.split('.').pop();
                    // if (stats.isFile() == true && fileExtension.toUpperCase() == 'jpg') {
                    //
                    // }
                });
            });
        })
    }
};
