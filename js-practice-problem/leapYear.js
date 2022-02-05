function isLeapYear(year){
 if ((year%4 ==0) &&( year%100 )){
   return true
 }
return false
}

var isleap2004 = isLeapYear(2100);
console.log(isleap2004)
