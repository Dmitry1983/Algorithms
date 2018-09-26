function towerBuilder(nFloors) { //my
    // build here
    let arr = [];
    let x   ='*';
    let sp  = ' ';
    let str = '';
    
    if (nFloors<=0){ nFloors = 1;}

    for (let i = 1; i<=nFloors; i++){
        for (let lE = 1 ; lE <=((nFloors-i));lE++){
            str +=sp;
        }
        for (let cE = 1 ; cE <=(i*2 - 1);cE++){
            str +=x;
        }
        for (let lE = 1 ; lE <=((nFloors-i));lE++){
            str +=sp;
        }
      arr.push(str);
      str = '';
    }
  
  return arr;
   // return arr;
  }


  function towerBuilder2(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }
  
  console.log(towerBuilder2(7));