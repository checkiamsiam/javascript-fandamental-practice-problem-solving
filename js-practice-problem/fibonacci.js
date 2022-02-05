let fibonacci = [0, 1];
for (let i = 2; i < 12; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
// functional way
function fibonacciFunction(number) {
  if (typeof (number) != 'number') {
    return console.log('use number borh!');
  }
  else if (number < 0) {
    return console.log('use positive number bro');
  }
  let fibo = [0, 1];
  for (let i = 2; i < number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
var result = fibonacciFunction(5);
console.log(result);
