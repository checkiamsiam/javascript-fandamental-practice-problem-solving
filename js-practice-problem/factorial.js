function factorial(factorialNumber){
  var j = 1;
      for(let i = 1 ; i <=factorialNumber ; i++ ){
        j = j * i;
      }
      return j;
}

var fourFactorial = factorial(3);
console.log(fourFactorial);
