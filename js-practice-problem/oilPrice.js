// Nasimur Rahman
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// ভিডিও ভালো করে দেখবে। 



// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।

function oilPrice(dieselAmount , petrolAmount  , octanAmount ){
  var dieselPrice = 114 
  var petrolPrice = 130 
  var octanPrice = 135
  var totalDieselPrice = dieselAmount * dieselPrice
  var totalPetrolPrice = petrolAmount * petrolPrice
  var totalOctanPrice = octanAmount * octanPrice
  var totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanPrice
  return totalPrice ;
}


console.log(oilPrice(30 , 20 , 10))