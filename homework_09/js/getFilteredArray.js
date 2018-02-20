getFilteredArray = (arr, cb) => {
    let filtArr = [];
    forEach(arr, valArr => {
       if(cb(valArr)) {
           filtArr.push(valArr);
       }
    });
    return filtArr;
};
