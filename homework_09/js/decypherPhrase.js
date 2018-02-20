let decypherPhrase = (obj, str) => {
  let newObj = {};
  for (val in obj) {
    tempObj[obj[val]] = val;
  }
  return cypherPhrase(newObj, str);
}
