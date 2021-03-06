let birdY = 200
var pipes = []
var pipeSpread = []
var gapHeight = []
numPipes = 20
alive = true
birdY = 200;
birdDY = 0
game = true
score = 0

function setup() {
  createCanvas(400, 400);
  
  //Fill arrays
  for(let i = 0; i < numPipes; i++)
    {
      pipeSpread.push(i * 150)
      gapHeight.push(random(-80,120))
    }
  
}

function draw() {
  
  checkPosition()
  
  if(game)
  {
    drawBackground();
    updateAndDrawBird()
    updateAndDrawPipes();
  }
  else
  {
    drawEndBackground()
  }
}

function drawBird(x,y,sc) {
  
  push();
    translate(x,birdY)
    scale(sc)
    //body
    fill('#edf246')
    rect(-25,-25, 50,50)
    //eye
    fill(255)
    ellipse(10, -10, 15, 15)
    fill(0)
    ellipse(12, -10, 5, 5)
    //mouth
    line(0,10, 25,10)
  pop();
  
}

function drawBackground() {

  //sky
  fill('#34baeb')
  rect(0,0,width, height)

  //ground
  fill('#7e8052')
  rect(0, 0.85*height, width, 0.15*height)
  fill('#00bd42')
  rect(0, 0.85*height, width, 20)

}

function drawEndBackground(){
  background(0)
  fill(240, 20, 50)
  textSize(width / 10);
  textAlign(CENTER, CENTER);
  text('Get Good Kid',200,150)
  text('Score: ',150,200)
  text(str(score),250,200)
}

function drawPipe(x, y, gap) {
  
  push();
    translate(x, y + 100)
    fill('#1da320')
    //upper pipe
    rect(-10, -250 - 0.5*gap, 20, 350)
    //lower pipe
    rect(-10,  0.5*gap, 20, 350)
  pop();
  
}

function updateAndDrawPipes() {
  for(let i = 0; i < numPipes; i++)
    {
      drawPipe(pipeSpread[i] + 300, gapHeight[i], 240)
      pipeSpread[i] -= 1
    }
}

function updateAndDrawBird() {
  if(birdY < 0)
    {
    birdY = 0
    birdDY = 1
    }
  drawBird(50, birdY, 1)
  birdY += birdDY
  birdDY += 0.25
    
}

function mousePressed(){
  birdDY = -5
}

function checkPosition(){
  if(birdY > height + 20)
    game = false
}







