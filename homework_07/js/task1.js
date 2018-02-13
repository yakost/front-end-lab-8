var N = parseInt (prompt ("How many floors?"));
var str = "";
if (N>0 && N<20) {
  for(var i=1; i<=N; i++) {
    for(var j=1; j<=N-i; j++) {
      str += "   ";
    }
    for(var k=N-i+1; k<N+i; k++) {
      str += "[~]";
    }
    for(var m=N+i; m<=2*N-1; m++) {
      str += "   ";
    }
    str += "\n";
  }
  console.log(str);
}
else {
  console.log("Incorrect!");
}
