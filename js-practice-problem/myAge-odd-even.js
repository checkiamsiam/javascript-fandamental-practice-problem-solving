function isEven(age){
  if(age%2 ==0 ){
    return true;
  }
  return false
}

var myAge = 27;
var myAgeEvenOrOdd = isEven(myAge);
console.log(myAgeEvenOrOdd);