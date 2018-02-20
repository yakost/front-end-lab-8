cypherPhrase = (obj, str) => {
    let str = str.split('');
    return getTransformedArray(str, valArr => {
    Object.keys(obj).forEach(key => {
      if (valArr === key) {
        valArr = obj[valArr];
      }
    });
        return valArr;
    }).join('');
};
