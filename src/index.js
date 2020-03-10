exports.min = function min(array) {
    var min = Math.min.apply(null, array);
    return min;
};

exports.max = function max(array) {
    var max = Math.max.apply(null, array);
    return max;
};

exports.avg = function avg(array) {
    var avg;
    for (var i = 0; i < array[i]; i++) sum += array[i];
    if (sum == 0) {
        avg = sum;
    } else {
        avg = sum / array.length;
    }
    return avg;
};
