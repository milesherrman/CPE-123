function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Background was created separately from the cat-car system, the translate function is used on everything after line 37
  
  //sky
  let c = color(0, 150, 500);
  fill(c);
  noStroke();
  rect(0, 0, 400, 310)
  
  //sun rays
  c = color(250, 250, 50, 70);
  fill(c);
  strokeWeight(0);
  triangle(370,20, 210,-10, 210,15)
  triangle(370,20, 214,44, 217,64)
  triangle(370,20, 227,84, 234,99)
  triangle(370,20, 260,115, 275,124)
  triangle(370,20, 300,135, 320,145)
  triangle(370,20, 345,152, 363,150)
  triangle(370,20, 385,152, 405,150)

  //sun
  c = color(250, 250, 50);
  fill(c);
  stroke(1);
  ellipse(370, 20, 130, 130)
  
  //upper grass
  c = color(0, 200, 0);
  fill(c);
  noStroke();
  rect(0, 310, 400, 60)
  
  //road
  c = color(0, 0, 0);
  fill(c);
  stroke(1);
  rect(0, 340, 400, 60)
  
  //lower grass
  c = color(0, 200, 0);
  fill(c);
  rect(0, 383, 400, 100)

  //translate cat-car system from (0,0) to the lower, opposite third of the canvas
  push();

  translate(260,400);
  
  //cat ears
  c = color(204, 102, 0);
  fill(c);
  strokeWeight(1.5)
  triangle(-10, -180, -30, -180, -30, -200)
  triangle(-10, -180, 10, -180, 10, -200)
  
  //cat arms
  quad(10, -130, 50, -110, 50, -100, 0, -123)
  quad(-70, -160, -30, -130, -30, -120, -80, -150)
  
  //cat tail
  
  beginShape();
  
  curveVertex(-30,-100)
  
  curveVertex(-30,-100)
  curveVertex(-30,-95)
  curveVertex(-80,-115)
  curveVertex(-77,-120)
  curveVertex(-70,-120)
  curveVertex(-53,-115)
  curveVertex(-30,-100)
  curveVertex(-30,-100)
  
  endShape();
  
  //quad(-75,-120,  -30,-100,  -30,-95,  -80,-115)
  
  //cat body+head
  ellipse(-10, -100, 60, 100)
  ellipse(-10, -160, 60, 50)
  
  //cat eyes
  c = color(328, 328, 328);
  fill(c);
  ellipse(-20, -170, 10, 10)
  ellipse(0, -170, 10, 10)
  c = color(0, 0, 0);
  fill(c);
  ellipse(-18, -170, 2, 2)
  ellipse(2, -170, 2, 2)
  
  //cat nose+mouth
  c = color(0, 0, 0);
  ellipse(-10, -159, 10, 6)
  noFill();
  strokeWeight(2)
  arc(-10, -156, 33, 15, PI/12, 4.6*PI/5)
  arc(-10, -158, 33, 30, PI/9, 4.5*PI/5)
  
  //car body+steering
  c = color(300, 10, 0);
  fill(c);
  strokeWeight(3)
  ellipse(60, -100, 40, 30)
  rect(-100, -100, 200, 50)
  
  //car wheels
  c = color(190, 190, 190);
  fill(c);
  ellipse(-60, -50, 50, 50)
  ellipse(60, -50, 50, 50)
  
  //air speed
  c = color(300, 300, 300, 200);
  fill(c);
  noStroke()
  arc(-106, -88, 100, 8, PI/2, PI)
  arc(-106, -62, 100, 8, PI, 3*PI/2)
  strokeWeight(3)
  stroke(300,300,300, 200)
  line(-172, -75, -110, -75)
  pop();
  
  push();
  translate(200,400);
  
  //birds
  c = color(0, 150, 500);
  fill(c);
  strokeWeight(10)
  stroke(0,0,0)
  arc(-116, -300, 50, 25, 5.*PI/5, 5.8*PI/3)
  arc(-65, -300, 55, 25, 5.1*PI/5, 5.9*PI/3)
  arc(-80, -340, 50, 45, 6*PI/5, 5.8*PI/3)
  arc(-30, -340, 55, 45, 4.9*PI/5, 1.8*PI)
  
  pop();
  
}