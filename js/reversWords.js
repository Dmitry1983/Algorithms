/**
 
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). Strings passed
 in will consist of only letters and spaces. Spaces will be included
  only when more than one word is present.

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWordsMy(str){
    //TODO Have fun :)
  let arr = [];
  var strR = '';

  arr = str.split(' ');
  for (let i = 0; i<arr.length;i++){
    let str = '';
    str = arr[i];
    //console.log(str);
    if (str.length>=5){
        
        for(let n = (str.length - 1); n>=0; n--){
            strR += str[n];
        }
        arr[i] = strR;
    }
    //console.log(strR);
    strR = '';
  }
  str = arr.join(" ");
  return str;
  }

  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  console.log(spinWords('Hey fellow warriors'));
  console.log(spinWords('This is a test'));
  console.log(spinWords('This is another test'));