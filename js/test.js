function mUlt(a,b){
    return a*b;
}

//console.log("mUlt = "+mUlt(5,10));

function digPow(n, p){
    var arrStr = n.toString().split('');
    var total = 0;
    var ix = 0;
        for (var i = p ; i<arrStr.length+p; i++){
            total += Math.pow(arrStr[ix],i);
            ix++;
        }
    if( total%n === 0){return total/n;} else{ return -1;}

  }
//console.log("digPow = "+digPow(46288, 3));
  /*
  Test.assertEquals(digPow(89, 1), 1)
  Test.assertEquals(digPow(92, 1), -1)
  Test.assertEquals(digPow(46288, 3), 51)
  
  digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
  
  digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
  
  digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
  
  digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  
   */

   /*
   Write a function that takes an (unsigned) integer as input, 
   and returns the number of bits that are equal to one in the binary 
   representation of that number.

   Example: The binary representation of 1234 is 10011010010, so 
   the function should return 5 in this case
   */

  var countBits = function(n) {
    var arrStr = n.toString(2).split('');
    var sum = 0;

    for (let i = 0; i<arrStr.length;i++){
        sum += parseInt(arrStr[i]);
    }
    return sum;
  };

 // console.log("countBits = "+countBits(7));

  /*
    Test.assertEquals(countBits(0), 0);
    Test.assertEquals(countBits(4), 1);
    Test.assertEquals(countBits(7), 3);
    Test.assertEquals(countBits(9), 2);
    Test.assertEquals(countBits(10), 2);
  */

 function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

 /*function validatePIN (pin) {
     if (((pin.length === 4)||(pin.length === 6))&&(pin == (pin/1))&&(/^[0-9]/.test(pin))){
         return true;
     } else return false;
  }*/

 // console.log(validatePIN("*000"));

  /*
    validatePIN("1234") === true
    validatePIN("12345") === false
    validatePIN("a234") === false
  */

/* function filter_list(l) {
    // Return a new array with the strings filtered out
    var arrOut = [];
    for (let i = 0; i < l.length;i++){
        console.log(typeof l[i]);
           if ((typeof l[i]) === "number"){
            arrOut.push(l[i]);
      }
    }
    return arrOut;
  }*/
  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

//console.log(filter_list([1,2,'aasf','1','123',123]));

/*
 filter_list([1,2,'a','b']) == [1,2]
 filter_list([1,'a','b',0,15]) == [1,0,15]
 filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */


/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.
*/


function friend(friends){
    return friends.filter(function(i) {return i.length == 4})
  }

  //console.log(friend(["Love", "Your", "Face", "1"]));
  /*

Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
   */

   /*
   A word (string) of length 0 < str < 1000 
   (In javascript you may get slightly more than 1000 
    in some test cases due to an error in the test cases).
     You do not need to test for this. This is only here
      to tell you that you do not need to worry about your 
      solution timing out.
   */



  function getMiddle(s)
  { 
    if (s.length == 1) return s;
    var ind = Math.round(s.length/2)-1;
    return s.slice(ind,(-1*ind));

  }

//console.log(getMiddle("A"));

   /*
    Test.describe("GetMiddle", function() {
    Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});
   
   */


   /*
    Implement a function that adds two numbers together and
    returns their sum in binary. The conversion can be done before,
    or after the addition.

    The binary number returned should be a string.
   
   1*/

   function addBinary(a,b) {
    return (a+b).toString(2);
}


//console.log(addBinary(51,12));
/*
Test.describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  Test.it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  Test.it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});
 */


 /*
 Complete the solution so that it splits the string into pairs 
 of two characters. If the string contains an odd number of
  characters then it should replace the missing second character
   of the final pair with an underscore ('_').
 */
/*
function solution(str){
let nArr = 0; 
let arrStr = [];
let arrEll;
if (str.length%2 != 0){nArr = (str.length+1)/2;}else{nArr = (str.length)/2; }
for(let i = 0; i<nArr;i++){
    arrEll = str.slice((i*2),(i+1)*2);
    if (arrEll.length == 1){arrEll = arrEll+'_'};
    arrStr.push(arrEll);
}
   return arrStr;
}
*/

function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }

//console.log(solution('abcdeg'));
/*
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/


/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars,
that are not every 2nd char, and concat them as new String.
Do this n times!

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/


function encrypt(text, n) {
  if (n<=0){return text;}
  if ((text.length == 0 )|| (text == '')||(text == null)){return text;}
  let eStr = '', oddStr = '', tempStr = text;
  for(let ni = 1; ni <=n;ni++){
      for (let i = 0; i< text.length; i++){
          if ((i+1)%2 == 0){
              eStr += tempStr[i];
          }else{ 
              oddStr += tempStr[i];
          }
      }
      tempStr = eStr+oddStr;
      eStr = '';
      oddStr = '';
  }
  return tempStr;
} //encrypt

function decrypt(encryptedText, n) {
  if (n<=0){return encryptedText;}
  if (encryptedText.length == 0){return encryptedText;}
  let cen = 0, strOut = '',tempStr = encryptedText;
    if ((encryptedText.length%2) == 0) {cen = encryptedText.length/2;
    }else{cen = (encryptedText.length-1)/2;}
  for (let ni = 1; ni <= n; ni++){
    for (let i = 1; i <= tempStr.length; i++){
      if (i%2 == 0){ 
            strOut = strOut + tempStr[(i/2)-1]; 
      }else{
            strOut = strOut + tempStr[(cen+((i+1)/2))-1];
        }
    }
    tempStr = strOut;
    strOut = ''
  }
  return tempStr;
} //decrypt


//console.log("encrypt = "+encrypt("This is a test!",1));

//console.log("decrypt = "+decrypt("hsi  etTi sats!",5));

/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);

*/

function towerBuilder(nFloors) {
  // build here
  let arr = [];
  let x   ='*';
  let sp  = '';
  let str = '';

  if (nFloors<=0){return arr;}
  
  for (let i = 1; i<=nFloors; i++){
    str += x;
  }

return str;
 // return arr;
}

console.log(towerBuilder(3));