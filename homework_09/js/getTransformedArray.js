function increase(val) {
    return val + 1;
}

function getTransformedArray(arr, zoom) {
    let transArr = [];
    transArr.push(forEach(arr, zoom));
    return transArr;
}
