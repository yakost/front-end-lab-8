var x = parseInt (prompt ("Input amount of EURO"));
var y = parseInt (prompt ("Input amount of USD"));
var EURUAH = x * 33.46;
var USDUAH = y * 27.12;
var diff = (EURUAH/USDUAH) * (y/x);

console.log (x+ " euros are equal " +EURUAH.toFixed(2)+ " UAH");
console.log (y+ " dollars are equal " +USDUAH.toFixed(2)+ " UAH");
console.log ("One euro is equal " +diff.toFixed(2)+ " dollars");
