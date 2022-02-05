let ourAge = [23, 25, 25, 85, -95, 65, 65];

// maximum number of a array
// functional concept max
function largeNumber(array) {
  let largest = array[0];
  for(var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > largest) {
      largest = element
    }
  }
  return largest;
}
var result = largeNumber(ourAge);
console.log(result);

// //short technic [math.max(...nameOfArray)]
var max = Math.max(...ourAge);
console.log(max);

// Min number of an array
function lowNumber(array) {
  let lowest = array[0];
  for(var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element < lowest) {
      lowest = element
    }
  }
  return lowest;
}
var result = lowNumber(ourAge);
console.log(result);

// //short technic [math.min(...nameOfArray)]
var max = Math.min(...ourAge);
console.log(max);
