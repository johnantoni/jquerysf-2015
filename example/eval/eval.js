var evaluate = require('static-eval');
var parse = require('acorn').parse;

var src = process.argv[2];
var ast = parse(src).body[0].expression;

console.log(evaluate(ast));
