var fs = require('fs');
var path = require('path');

fs.createReadStream(path.join(__dirname, 'source.js'))
    .pipe(process.stdout)
;
