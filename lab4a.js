
let x = 0;
let y = 0;
let rot = 0;
let sc = 0;
let r = 0;
let g = 0;
let b = 0;
let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() 
  {
    noLoop();
    background(100,200,200);
    
    while (i<20)
      {
drawCircleFace(random(10,390),random(10,390),
               random(0,2*PI),random(0.1,0.5), random(200,255), random(100,200), random(50,155));
      i++;
      }
  }


function drawCircleFace(x,y,rot,sc,r,g,b)
  {
  push()
  translate(x,y)
  rotate(rot)
  scale(sc)
    
  //ears
  fill(r,g,b)
  strokeWeight(3)
  ellipse(100, 0, 20, 50)
  ellipse(-100, 0, 20, 50)
  
  //face
  ellipse(0, 0, 200, 200)
  
  //smile
  fill(r,g,b)
  strokeWeight(5)
  arc(0, 10, 150, 120, 0, PI)
  
  //eyes
  noFill();
  strokeWeight(1)
  
  //white
  fill(255,255,255)
  ellipse(30, -40, 40, 45); 
  ellipse(-30, -40, 40, 45)
  
  //black
  fill(0,0,0)
  ellipse(-30, -40, 33, 38)
  ellipse(30, -40, 33, 38)
  pop()
  }