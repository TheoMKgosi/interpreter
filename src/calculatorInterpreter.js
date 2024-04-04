const prompt = require('prompt-sync')();
const expression = prompt("Enter a maths expression ");

let currentCharPosition = 0
let look;

function getChar(){
  if( currentCharPosition < expression.length){
    look = expression.charAt(currentCharPosition);
  }

  currentCharPosition++;
}

function getNum(){
  num = Number(look+"");
  getChar();

  return num;
}

getChar();
let first = getNum();
let operator = look;
getChar();
let second = getNum()
console.log(first);
console.log(operator);
console.log(second);
console.log(first + second);
