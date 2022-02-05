//problem 1 
function anaToVori(anaUnit){
  if(typeof(anaUnit) != "number"){
    var errorMsgOne = 'please give a valid value';
    return errorMsg;  //if anyone five unvalid value
  }
  var voriUnit = Number((anaUnit / 16).toFixed(2));
  return voriUnit; //main output
}



//problem 2
function pandaCost(singaraQuantity , somusaQuantity , jilapiQuantity){
  if(typeof(singaraQuantity) != "number" || typeof(somusaQuantity) != "number" || typeof(jilapiQuantity) != "number"){
    var errorMsgTwo = 'please enter a valid value for valid output';
    return errorMsgTwo; //if anyone five unvalid value
  }
  var perSingaraRate = 7; 
  var perSomusaRate = 10;
  var perJilapiRate = 15;
  var totalSingaraPrice = perSingaraRate * singaraQuantity; 
  var totalSomusaPrice = perSomusaRate * somusaQuantity;
  var totalJilapiPrice =perJilapiRate * jilapiQuantity;
  var totalPrice = totalSingaraPrice + totalSomusaPrice + totalJilapiPrice;
  return totalPrice; //main output
}



//problem 3
function picnicBudget(numberOfPeople){
  if((numberOfPeople <= 0) || typeof(numberOfPeople) != "number"){
    var errorMsgThree = 'brother! please give us valid information to calculate'
    return errorMsgThree;  //if anyone input unvalid information
  }
  var SubscriptionRateUnder100 = 5000;
  var SubscriptionRateUnder200 = 4000;
  var SubscriptionRateUpper200 = 3000;
  var first100Cost = 100 * 5000;
  var second100Cost = 100 * 4000;

  // 100 joner kom ba soman manus gele hisab
  if(numberOfPeople<=100){
    var totalCostUnder100 = numberOfPeople * SubscriptionRateUnder100;
    return totalCostUnder100;
  }
  //100 joner besi kintu 200 jon porjonto hole
  if( numberOfPeople  > 100  &&  numberOfPeople <= 200){
    var bakiPeopleUnder200 = numberOfPeople - 100;
    var costOfBakiPeopleUnder200 = bakiPeopleUnder200 * SubscriptionRateUnder200;
    var totalCostUnder200 = costOfBakiPeopleUnder200 + first100Cost;
    return totalCostUnder200;
  }
  // 200 joner besi hole 
  if(numberOfPeople>200){
    var bakiPeopleUpper200 = numberOfPeople - 200;
    var costOfBakiPeopleUpper200 = bakiPeopleUpper200 * SubscriptionRateUpper200;
    var totalCostUpper200 = first100Cost + second100Cost + costOfBakiPeopleUpper200;
    return totalCostUpper200; 
  }
}


//problem 4
function oddFriend(friendList){
  if(typeof(friendList) != "object"){
    var errorMsgFour = 'use this function for a array that contain some string values'
    return errorMsgFour; //if anyone 
  }
  var result;
  for(const friend of friendList){
    if((friend.length % 2) !=0){
      result = friend;
      break;
    }
  }
  return result; //main output
}



