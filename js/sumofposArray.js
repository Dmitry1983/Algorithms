/*function positiveSum(arr) {
   return arr.reduce((sum, i) => i > 0? sum + i : sum = sum );
    //return arr.map(function(i){ return i > 0 })
  }*/

  /*function positiveSum(arr) {
      if (arr === []) {return '0'};
    return arr.reduce((sum, i) => i > 0? sum + i : sum = sum );
   }*/

   function positiveSumMy(arr) {
       if (arr.length ==0){return 0;}
       let sum = 0;
       for (let i = 0; i< arr.length;i++){
           if (arr[i] > 0) {sum += arr[i];}
       }
       return sum;
   // return arr.length != 0 ? arr.reduce((sum, i) => i >= 0 ? sum + i : sum < 0 ? sum = 0 : sum = sum ) : 0;
   //return arr.length != 0 ? arr.reduce((sum, i) => i > 0 ? sum+i : sum =sum ) : 0;
   }

console.log(positiveSumMy([1,2,3,4,5]));
console.log(positiveSumMy([1,-2,3,4,5]));
console.log(positiveSumMy([]));
console.log(positiveSumMy([-5,-1,-2,-3,-4,-5]));
console.log(positiveSumMy([-1,2,3,4,-5]));

   function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));
console.log(positiveSum([-5,-1,-2,-3,-4,-5]));
console.log(positiveSum([-1,2,3,4,-5]));

//[1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue);
  /*
  Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.


Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);
  */