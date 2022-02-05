var myFnd = ['sakib', 'ali' , 'bisal' , 'rizvi' , 'nasimurohm' , 'mahinmolla'];
function bigName(arrayOfFriends){
  var bigestName = myFnd[0];
  for(const fnd of myFnd){
    if( bigestName.length < fnd.length){
      bigestName =fnd;
    }
   }
   return bigestName;
}

var bestFnd = bigName(myFnd);
console.log(bestFnd);