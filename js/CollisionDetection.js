function collision(x1, y1, radius1, x2, y2, radius2) {
    // collision?
    var l = Math.sqrt(Math.pow(((x1)-(x2)),2)+Math.pow(((y1)-(y2)),2));
    console.log('Length  = '+l);
    console.log('R1 + R2 ='+(radius1+radius2)+' : r1 = '+radius1+' : r2 = '+radius2 );
    if (l <= (radius1+radius2)) {return true;}else{return false;}
  }

  console.log(collision(1, 1, 1, 1.1, 1.1, 0.1));
  console.log(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5)));

  console.log(collision(2, 2, 2, 4, 4, 2));