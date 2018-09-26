function sumTriangularNumbers(n) {
    if ( n <= 0 ){return  0;}
    let sumN = 0,sum = 0;
    for (let i = 0; i <= n ; i++){
        sumN +=i;
        sum +=sumN;
    }
    console.log('sum = '+sum);
   return sum;
  }


  sumTriangularNumbers(6);
  /*
  
[01]
02 [03]
04 05 [06]
07 08 09 [10] e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
11 12 13 14 [15]
16 17 18 19 20 [21]

Test.assertEquals(sumTriangularNumbers(6), 56);
Test.assertEquals(sumTriangularNumbers(34), 7140);
Test.assertEquals(sumTriangularNumbers(-291), 0);
Test.assertEquals(sumTriangularNumbers(943), 140205240);
Test.assertEquals(sumTriangularNumbers(-971), 0);

  */