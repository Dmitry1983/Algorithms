//String Reverse Algorithm
function strRev(str){
let strR = '';
for(let i = (str.length - 1); i>=0; i--){
    strR += str[i];
}
return strR;
}
console.log('strRev 1 = '+strRev("Hello, World!"));



// return words.split('  ').map( - предложение целиком
function strRev2(words){
    return words.split('  ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log('strRev 2 = '+strRev2("Hello, World!"));



 //  /\w{5,}/g,   5 - обозначает какие слава переворачивать, если длина больше 5
function spinWords3(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }

  console.log('strRev 3 = '+spinWords3("Hell oWorl d"));