/*let number1 = "123";
let n = "";
for (let i = number1.length - 1; i >= 0; i--) {
  n += number1[i];
}

let number2 = 345;
let s = 0;
while (number2 > 0) {
  s += number2 % 10;
  number2 = Math.floor(number2 / 10);
}

console.log(Number(n) + s);*/



function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  function concatValues(num1, num2) {
    let reversedNum1 = reverseString(num1.toString());
    let sumNum2 = sumDigits(num2);
    return reversedNum1 + sumNum2;
  }
  
  let num1 = parseInt(prompt("Enter an integer to reverse: "));
  let num2 = parseInt(prompt("Enter another integer to sum its digits: "));
  let result = concatValues(num1, num2);
  
  console.log(result);

  // call by values in javascript 
 //arrow functions 
 



          
 

