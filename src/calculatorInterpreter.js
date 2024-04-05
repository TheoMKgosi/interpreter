const expression = "8+8/2";
let currentCharPosition = 0;
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
  result = factor();
  while ( (look == '*') || (look == '/')){
    switch (look) {
      case '*':
        result = result * multiply();
        break;
      case '/': 
        result = result / divide();
        break;
    }
  }
  return result;
}

function factor(){
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

function divide(){
  matchAndEat('/');
  return factor();
}

function multiply(){
  matchAndEat('*');
  return factor();
}

function arithmeticExpression() {
  result = term();
  while((look == '-') || (look == '+')){
    switch (look) {
      case '+':
        result = result + add();
        break;
      case '-': 
        result = result - subtract();
        break;
    }
  }

  return result;
}


console.log(arithmeticExpression());
