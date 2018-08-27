
var _ = require('lodash');

var count = 10;

bruteForceFibonacci(count);

function bruteForceFibonacci(count) {
    var prev = 0;
    var next = 1;
    var res = '';

    res += prev;
    res += ',' + next;

    _.times(count, () => {
        var tmp = next;
        next = prev + next;
        prev = tmp;

        res += ',' + next;
    });

    console.log(res);
}