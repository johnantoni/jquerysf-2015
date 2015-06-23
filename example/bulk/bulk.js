var bulk = require('bulk-require');
var modules = bulk(__dirname, [ 'pages/*.js', 'lib/*.js' ]);
console.log(modules);
