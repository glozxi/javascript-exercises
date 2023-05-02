const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }
    let start;
    let end;
    if (a > b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }
    const n = end - start + 1;
    return (n / 2) * (start + end);
};

// Do not edit below this line
module.exports = sumAll;
