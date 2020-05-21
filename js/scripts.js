/*addition*/
var add = function(number1, number2){
  return number1 + number2;
};
/*subtraction*/
var subtraction = function(number1, number2){
  return number1 - number2;
};
/*multiplication*/
var multiplication = function(number1, number2){
  return number1 * number2;
};
/*division*/
var division = function(number1, number2){
  return number1 / number2;
};

var number1= parseInt(prompt("Enter the first number:"));
var number2= parseInt(prompt("Enter the second number:"));
var result = division(number1,number2);
alert(result);
