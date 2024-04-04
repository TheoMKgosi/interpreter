const prompt = require('prompt-sync')();
const expression = prompt("Enter a maths expression ");

let currentCharPosition = 0
let look;

getChar();


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

function matchAndEat(char){
  if( char == look ){
    getChar();
  } else {
    console.error("Error: occured")
  }
}

function term(){
  return getNum();
}

function add(){
  matchAndEat('+');
  return term();
}

function subtract(){
  matchAndEat('-');
  return term();
}

function arithmeticExpression() {
 result = term();

  switch (look) {
    case '+':
      result = result + add();
      break;
    case '-': 
      result = result - subtract();
      break;
  }

  return result;
}


console.log(arithmeticExpression());
