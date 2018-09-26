function validParentheses(parens){
    //TODO 
    var count = 0;
    for (let i = 0; i<parens.length;i++){
    if (parens[i] == "(") { count--; }
    if (parens[i] == ")") { count++; }
    if ((parens[0] == ")") || (parens[parens.length-1] == "(")) { return false;}
    }
    console.log(count);
    if (count == 0){return true;} else {return false;}
  }


  console.log(validParentheses(')(())()('));