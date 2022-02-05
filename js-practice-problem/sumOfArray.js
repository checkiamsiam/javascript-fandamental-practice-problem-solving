var numbers = [45 , 45 , 34 , 38, 93 , 03, 79];

let sum = 0;
for(var i =0 ; i < numbers.length ; i++){
        var numbersElement = numbers[i];
        sum = sum + numbersElement;
}
console.log(sum);

// functional way 

function arraySum(targetArray){
  let sum = 0;
for(var i =0 ; i < numbers.length ; i++){
        var numbersElement = numbers[i];
        sum = sum + numbersElement;
}
return sum;
}

console.log(arraySum(numbers));
