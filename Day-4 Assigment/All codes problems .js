// 1 st code-------------------------------------
/*prime number
function mult(arr) {
    let res = arr.map(function(number) {
      if (number === 1) {
        return null; // skip over 1
      } else if (number > 1) {
        let isPrime = true; // initialize isPrime to true
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          return number; // include prime numbers in the result array
        } else {
          return null; // skip over non-prime numbers
        }
      }
    });
    return res.filter(function(number) {
      return number !== null; // remove null values from the result array
    });
  }
  
  let arr = [1, 2, 3, 4];
  console.log(mult(arr)); // [2, 3]
  */

 //uppercase 2 nd code--------------------------------------------------------------------------
 /*function upperst(arry){
    arry=["shashi","ghost","death"]
    let e=arry.map(function(n1){
        return n1.toUpperCase();
    })
    console.log(e)
}
upperst();*/
/* ---------------------------------------------------------------------------------------------
3 rd
function upperst(arry) {
  let longest = arry.reduce(function(n1, n2) {
    if (n1.length > n2.length) {
      return n1;
    } else {
      return n2;
    }
  });
  return arry.filter(function(str) {
    return str === longest;
  });
}
let arry = ["shashi", "ghost", "death"];
console.log(upperst(arry));
*/

//4 th-------------------------------------------------------------------------------------------------
/*function sumofString(arry){
  arry=["shashi","lightygami","erin"];
  f=0
  let g=arry.map(function(n1){
      return f=f+n1.length
  })
  console.log(f)
}
sumofString();*/
//5 th code------------------------------------------------
/*class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const students = [
  new Student("rakesh", 75),
  new Student("shashikanth", 82),
  new Student("lokesh", 90),
  new Student("srishanth",99)];
const highestScore = Math.max(...students.map((student) => student.score));
const topStudents = students.filter((student) => student.score === highestScore);
console.log(topStudents.map((student) => student.name));
*/

//---------------------------------------------------------------------------------------------------
//6 th

/*

function convertNegativesToPositives(arry) {
  return arry.map(function(n) {
    if (n < 0) {
      return -1 * n;
    }
    
  });
  return null;
}

let arry = [-2, 7, -5, -8, 23, 6];
console.log(convertNegativesToPositives(arry)); // should log [2, 7, 5, 8, 23, 6]

//7 th code-------------------------------------------------------------------------------------
class Student {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  const students = [
    new Student("Odelu", 75),
    new Student("shashikanth", 82),
    new Student("kousiii", 90),
    new Student("Ranjini",99)];
const passedStudents = students.filter((student) => student.score > 70);
  console.log(passedStudents.map((student) => student.name)); //