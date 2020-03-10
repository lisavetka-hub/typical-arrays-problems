exports.min = function min(array = []) {
    return array.reduce((a, b) => Math.min(a, b), 0);
};

exports.max = function max(array = []) {
    return array.reduce((a, b) => Math.max(a, b), 0);
};

exports.avg = function avg(array = []) {
    return array.reduce((a, b) => a + b, 0) / array.length || 0;
};
