var defined = require('../');
var test = require('tape');

test('whatever', function (t) {
    t.plan(1);
    
    var opts = { y : false, w : 4 };
    var x = defined(opts.x, opts.y, opts.w, 8);
    t.equal(x, false);
});
