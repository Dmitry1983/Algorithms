function iqTest(numbers){
    // ...
    let arr = [];
    arr = numbers.split(' ');
    let even = 0, odd = 0;
    let eInd = -1, oInd = -1;

    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 == 0){even++;eInd = i;}else{odd++; oInd = i;} 
    }
    if (odd>even){return eInd+1;}else{return oInd+1;}
  }

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
console.log(iqTest("1 1 1 2"));
  /*
  
Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);

  */