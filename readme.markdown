# ASTs and whatever

some fun things you can do with ASTs

---
# me

http://substack.net
https://github.com/substack
https://npmjs.com/~substack

---
# as a last resort

ASTs let you cheat.

Make sure there's a good reason.

---
# esprima

``` js
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/source.js', 'utf8');

var parse = require('esprima').parse;
console.log(parse(src));
```

---
# acorn

``` js
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/source.js', 'utf8');

var parse = require('acorn').parse;
console.log(parse(src));
```

---
# falafel

walk and modify an AST

     tree        order

      a
     / \
    b   c       b d e c a
       / \
      d   e

---
# falafel

``` js
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/source.js', 'utf8');

var falafel = require('falafel');
var output = falafel(src, function (node) {
    // ...
});
```

---
# falafel

usual AST properties plus:

* `node.parent`
* `node.source()`
* `node.update()`

---
# browserify

looks for `require()` calls to build a bundle

---
# insert-module-globals

looks for:

* `process`
* `__dirname`
* `__filename`
* `global`
* `Buffer`

---
# brfs

looks for `fs.readFileSync()` calls to inline

---
# static-module

define interfaces for 

---
# static-module

``` js
var staticModule = require('static-module');
var quote = require('quote-stream');
var fs = require('fs');
```

---
# static-module

``` js
var staticModule = require('static-module');
var quote = require('quote-stream');
var fs = require('fs');

var sm = staticModule({
    // ...
}, { vars: { __dirname: __dirname } });
process.stdin.pipe(sm).pipe(process.stdout);
```

---
# static-module

``` js
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
```

---
# glslify

webgl shaders using static-module

``` js
var glslify = require('glslify')

var src = glslify(__dirname + '/shader.glsl')

console.log(src)
```

---
# static-eval

evaluate static expressions by walking the AST

```
     *
    / \
   +   5
  / \
 3   2
```

---
# coverify

wraps every expression and statement!

``` js
var x = 5;
var y = (x + 10) * 2;
console.log(x / y);
```

turns into:

``` js
var x = wrap(1, 5); wrap(2);
var y = wrap(7, wrap(5, wrap(4, x) + wrap(3, 10)) * wrap(6, 2)); wrap(8);
wrap(11, console.log)(wrap(9, x) / wrap(10, y)); wrap(12);
```

---
# live-patch

update a running program live

by diffing and patching the AST

---

EOF
