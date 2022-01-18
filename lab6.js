let x0, y0, x1, y1;
let x2, y2, x3, y3;
let x4, y4, x5, y5;
let x6, y6, x7, y7;
let x8, y8, x9, y9;
let rd,cx,cy;
let circ = false;
let dist;

//sun
rd = 50;
cx = 270;
cy = 280;

//ground
x0 = 0;
y0 = 250;
x1 = 400;
y1 = 280;

//tree 1
x2 = 30
y2 = 300
x3 = 70
y3 = 140

x4 = 70
y4 = 140
x5 = 120
y5 = 300

//tree 2
x6 = 100
y6 = 300
x7 = 150
y7 = 140

x8 = 150
y8 = 140
x9 = 200
y9 = 300

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(0.2);
  for(let r = -5; r < width + 5; r += 5)
    {
    for(let c = -5; c < height + 5; c += 5)
      {
        if(implicitGround(r,c) > 0)
          {
          fill(185 - 0.55*c, 300 - 0.55*c, 185 - 0.5*c)
          push();
          translate(r,c)
          rotate(0.7)
          ellipse(0,0,10,4)
          pop();
          }
        else if(implicitTreeL(r,c) > 0 && implicitTreeL2(r,c) > 0)
          {
          fill(0.9*r,100 + 0.8*r,0.9*r)
          push();
          translate(r,c)
          rotate(1.6)
          ellipse(0,0,8,5)
          pop(); 
          }
        else if(implicitTreeR(r,c) > 0 && implicitTreeR2(r,c) > 0)
          {
          fill(-60 + 0.9*r,40 + 0.8*r, -60 + 0.9*r)
          push();
          translate(r,c)
          rotate(1.6)
          ellipse(0,0,8,5)
          pop();   
          }
        else if(implicitSun(r,c) < 0)
          {
          fill(250,250,10,200)
          push();
          translate(r,c)
          rotate(3)
          rect(0,0,12,7)
          pop(); 
          }
        else
          {
          //fill(250, 170,0)
          fill(120 + 0.6*c, 200 - 0.2*c, 250 - 0.8*c, 200)
          push();
          translate(r,c)
          rotate(2.6)
          ellipse(0,0,8,5)
          pop();
          }
      }
    }
}

function implicitGround(r,c){
  return ((y0-y1)*r + (x1-x0)*c + x0 * y1 - x1 * y0)
}
function implicitTreeL(r,c){
  return ((y2-y3)*r + (x3-x2)*c + x2 * y3 - x3 * y2)
}
function implicitTreeL2(r,c){
  return ((y4-y5)*r + (x5-x4)*c + x4 * y5 - x5 * y4)
}
function implicitTreeR(r,c){
  return ((y6-y7)*r + (x7-x6)*c + x6 * y7 - x7 * y6)
}
function implicitTreeR2(r,c){
  return ((y8-y9)*r + (x9-x8)*c + x8 * y9 - x9 * y8)
}
function implicitSun(r,c){
  return ((r-cx) * (r-cx) + (c-cy) * (c-cy) - rd * rd);
}