var staticModule = require('static-module');
var quote = require('quote-stream');
var fs = require('fs');

var sm = staticModule({
    fs: {
        readFileSync: function (file) {
            return fs.createReadStream(file).pipe(quote())
        }
    }
}, { vars: { __dirname: __dirname } });
process.stdin.pipe(sm).pipe(process.stdout);
