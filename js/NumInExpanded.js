function expandedForm(num) {
    // Your code here
    var str ='', strt = '';
    for (let i = 0 ;i < num.toString().length;i++){
        if (num.toString()[i] != 0) {
            if (i != 0 ){str +=' + '; }
            strt = num.toString()[i]*(Math.pow(10,num.toString().length-i-1));
            str +=strt;
            
        }
    }
    return str;

}

  console.log(expandedForm(2011));
  /*
Test.assertEquals(expandedForm(12), '10 + 2');
Test.assertEquals(expandedForm(42), '40 + 2');
Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
  */