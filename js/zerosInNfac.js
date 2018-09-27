function zeros (n) {
let i = 1,sumN = 0;
  while((n/Math.pow(5,i)) >=1){
    sumN += Math.floor(n/Math.pow(5,i));
    i++;
  }
  return sumN;
}

console.log(zeros(200));

/*
Test.describe("Sample Tests", function() {
  Test.it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
  });
});
*/