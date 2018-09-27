function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }

/*function bouncingBall(h,  bounce,  window) {
    // your code here
    if ((h <= 0)||(bounce<0)||(bounce>1)||(window>=h)){return -1;}
    let count = 1;
    for (let i = h ; i>window ; i *= bounce){
        count += 2;
    }
    return count-2;
  }*/

  console.log(bouncingBall(3.0, 0.66 , 1.5));
  console.log(bouncingBall(300.0, 0.66 , 1.5));
  /*

Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive 
integer, otherwise return -1.

  describe("Tests", function(){
    it ("test1", function(){
         Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
    });
    
    it ("test2", function(){
         Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
    });
    
});
  
  */