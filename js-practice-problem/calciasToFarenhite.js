function Tofarenhite(calciasScale){
  var farhen = ((9*calciasScale)+160)/5;
  return farhen;
}
var nowTempretureInCalcias = 40;
var fiveCalciasToFarenhite =  Tofarenhite(nowTempretureInCalcias);
console.log(fiveCalciasToFarenhite);
