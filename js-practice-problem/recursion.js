//introduce to recursion in javascript
function loop(i) {
  if (i > 10) {
    return;
  }
  console.log(i)
  loop(i + 1);

}
loop(1);




//sum by recursion
function total(i) {
  if (i == 5) {
    return 5;
  }
  return i + total(i + 1)
}
console.log(total(1));





//factorial by recursion 
function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorial(i - 1)
}
console.log(factorial(3));