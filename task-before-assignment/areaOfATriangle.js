function areaOfTriangle(firstBahu , secondBahu , thirdBahu){
  var s = (firstBahu + secondBahu + thirdBahu) / 2;
  var area = s * (s - firstBahu) * (s - secondBahu) * (s - thirdBahu);
  area = Math.sqrt(area);
  area = Math.round(area);
  return area;
}
var myTriangle = areaOfTriangle( 3, 4, 5);
console.log(myTriangle);