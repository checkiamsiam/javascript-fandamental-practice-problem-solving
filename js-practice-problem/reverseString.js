/////////////////////////////////////////////////////////////////////////////
var hello = 'hello my name is siam!';

function reverseString(text) {
  let reverse = '';
  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    //for(cost letter of text ) ////////// aki kotha hoito
    reverse = letter + reverse;
  }
  return reverse;
}
var result = reverseString(hello);
console.log(result);

//////////////////////////////////////////////////////////////////////////