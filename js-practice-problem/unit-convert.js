function inchToFeet(inchUnit){
  var feetUnit = inchUnit * 0.0833333;
  return feetUnit;
}

var howMuchFeetIn50inch = inchToFeet(50);
howMuchFeetIn50inch = howMuchFeetIn50inch.toFixed(2)
howMuchFeetIn50inch = Number(howMuchFeetIn50inch)
console.log(howMuchFeetIn50inch);