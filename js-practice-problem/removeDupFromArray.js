function removeDup(array) {
  var newArray = [];
  // for (let index = 0; index < array.length; index++) {
  //   const elements = array[index];
  //using for...of 
  for (const element of array) {
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  }
  return newArray;
}
let ourName = ['okib', 'mokib', 'sakib', 'kikib', 'sakib', 'mokib', 'sakib'];
var uniqueName = removeDup(ourName);
console.log(uniqueName);