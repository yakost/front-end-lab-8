var a = parseInt (prompt ("The length of 1 side?"));
var b = parseInt (prompt ("The length of 2 side?"));
var c = parseInt (prompt ("The length of 3 side?"));
var p = (a+b+c)/2;
var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

if ((a <= 0) || (b <= 0) || (c <= 0)) {
    console.log("Incorrect data!");
}
else {
    console.log(area.toFixed(2));
}

if (a+b <= c || a+c <= b || b+c <= a) {
    document.write ("You don't have a triangle.")}
else if( ((a*a) + (b*b) == (c*c)) || ((a*a) + (c*c) == (b*b)) || ((c*c) + (b*b) == (a*a)) ) {   // has one right interior angle (90grad)
    document.write ("Right-angled triangle.");}
else if(a==b && b==c) {                           // all lengths of sides are equal
    document.write ("Equilateral triangle.");}
else if(a==b || a==c || b==c) {                   // only two lengths of sides are equal
    document.write ("Isosceles triangle.");}
else {                                            // all lengths of sides aren’t equal
    document.write ("Scalene triangle.");}
