var Profit = [23, 45, 32, 76, -98,  35, 4];
var newArray = [];
for (const man of Profit) {
  if(man < 0){
    break;
  }
  if (man > 0) {
    newArray.push(man);
  }
}

console.log(newArray);