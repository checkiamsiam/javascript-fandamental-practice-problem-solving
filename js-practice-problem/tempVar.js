var first = 5;
var second = 7;

var temp = first;
var first = second;
var second = temp;

console.log(first , second);

[first , second] = [second , first];
console.log(first , second);
