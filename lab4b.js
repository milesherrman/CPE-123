let x = 0;
let y = 0;
let w = 0;
let h = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() 
{
  
  background(0);
  strokeWeight(2)
  for(y = 0; y < height; y = y + h)
    {
      h = random(23,25)
      //didn't want all bricks lined up on x=0 so I just offset the starting point
      for(x=-200; x < width; x = x + w)
        {
          w = random(50,65)
          fill(random(205,255),80,80)
          rect(x, y, w, h)
        }
    }
}