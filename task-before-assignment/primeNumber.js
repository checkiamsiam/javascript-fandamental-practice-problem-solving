function isPrime(number) {
  if (number <= 3) {
    var resultFormulaOne = number + ' is a prime number';
    return resultFormulaOne;
  } else {
    var Bhag = number / 6;
    var minAbs = Math.floor(Bhag);
    var maxAbs = Math.ceil(Bhag);

    if ( ((6 * minAbs) + 1) == number){
      var resultFormulaTwo = number + ' is a prime number';
      return resultFormulaTwo;
    }else if(((6*maxAbs) - 1) == number){
      var resultFormulaThree = number + ' is a prime number';
      return resultFormulaThree;
    }else{
      var resultFormulaFour = number + ' is not a prime number';
      return resultFormulaFour;
    }
  }
}
var isThisIsAPrime = isPrime(15);
console.log(isThisIsAPrime);