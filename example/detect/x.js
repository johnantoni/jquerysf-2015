var acorn = require('acorn');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/source.js', 'utf8');
console.log(acorn.parse(src));
