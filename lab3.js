//put background in its own function

let x = 0;
let clicked = false;
function setup() {
  createCanvas(400, 600);
}

function draw() {
  
function drawBackground()
  {
  //blue sky
  background(0, 190, 255);
  
  push();
  translate(0,90)
  
  //mountains
  beginShape();
  fill(130,150,150)
  curveVertex(-50,150)
  curveVertex(-50,150)
  curveVertex(0,140)
  curveVertex(50,120)
  curveVertex(100,130)
  curveVertex(150,145)
  curveVertex(250,120)
  curveVertex(300,130)
  curveVertex(350,150)
  curveVertex(400,160)
  curveVertex(450,160)
  curveVertex(450,650)
  curveVertex(-50,650)
  curveVertex(-50,150)
  endShape();
  pop();
  
  //stone wall
  fill(140,140,140)
  rect(0, 550, 400, 25)
  fill(100,100,100)
  rect(0, 575, 400, 25)
  line(0,575, 400, 575)
  line(10, 575, 10, 600)
  line(10, 575, 25, 550)
  line(380, 575, 380, 600)
  line(380, 575, 400, 550)
  
  //body (suit)
  beginShape();
  fill(0,0,0)
  curveVertex(50,600)
  curveVertex(50,600)
  curveVertex(50,400)
  curveVertex(150,350)
  curveVertex(200,340)
  curveVertex(230,340)
  curveVertex(300,360)
  curveVertex(350,400)
  curveVertex(350,500)
  curveVertex(315,650)
  curveVertex(50,600)
  endShape();
  
  //white undershirt
  fill(255,255,255)
  beginShape();
  curveVertex(206, 430)
  curveVertex(237, 341)
  curveVertex(175, 344)
  curveVertex(206, 430)
  curveVertex(206, 430)
  endShape();
  
  /*
  //neck
  push();
  translate(165,260);
  fill('#ffbd80')
  quad(20,20, 60,20, 60,80, 20,80)
  pop();
  */
  
  //red tie
  fill(200,0,0)
  quad(206,430, 190,395, 206,350, 220, 395)
  quad(206,333, 190,350, 206,370, 220,350)
  }
  
  drawBackground()
  drawNormalFace()
  
function drawNormalFace()
{
  push();
  translate(205,220)
  fill('#ffbd80')
  strokeWeight(1)
  
  //ears
  ellipse(65, 0, 25, 50)
  ellipse(-65, 0, 25, 50)
  
  //head
  ellipse(0,0, 130, 160)
  
  //eyes
  fill(255, 255, 255)
  ellipse(-25, -12, 15, 15)
  ellipse(25, -12, 15, 15)
  fill(0,0,0)
  ellipse(-27, -14, 6, 6)
  ellipse(23, -14, 6, 6)
  
  //nose
  fill('#ffbd80')
  arc(0,10, 20, 20, 0, PI)
  
  //mouth
  strokeWeight(2)
  arc(0, 50, 50, 20, 1.1*PI, 1.9*PI)
  
  //hair
  strokeWeight(0)
  fill('#fada73')
  arc(0, -39, 110, 83, PI, 2*PI)
  triangle(-55,-39,  -40,-39,  -48,-25)
  triangle(-55 + 15,-39, -40 + 15,-39,-48 + 15,-25)
  triangle(-55 + 30,-39,-40 + 30,-39,-48 + 30,-25)
  triangle(-55 + 45,-39,-40 + 45,-39,-48 + 45,-25)
  triangle(-55 + 60,-39, -40 + 60,-39,-48 + 60,-25)
  triangle(-55 + 75,-39, -40 + 75,-39,-48 + 75,-25)
  triangle(-55 + 90,-39, -40 + 90,-39,-48 + 90,-25)
  
  pop();
  
}
  
function drawCircleFace()
  {
  push();
    
  //translate+rotate head
  translate(-130,205);
  rotate(x/53.3)
    
  //ears
  fill('#ffbd80')
  strokeWeight(3)
  ellipse(x + 100, 0, 20, 50)
  ellipse(x - 100, 0, 20, 50)
  
  //face
  ellipse(x, 0, 200, 200)
  
  //smile
  fill('#ffbd80')
  strokeWeight(5)
  arc(x, 10, 150, 120, 0, PI)
  
  //eyes
  noFill();
  strokeWeight(1)
  
  //white
  fill(255,255,255)
  ellipse(x - 30, -40, 40, 45); 
  ellipse(x + 30, -40, 40, 45)
  
  //black
  fill(0,0,0)
  ellipse(x + -30, -40, 33, 38)
  ellipse(x + 30, -40, 33, 38)
  
  //surprise movement
  if(x<=330)
    {
  x = x + 5;
    }
  if(x==330)
    {
      return 5;
    }
    
  pop();
    
  }
  
//if face is clicked, begin animation
 if(clicked == true)
  {
  drawCircleFace()
  }
  
}

//check if face area is clicked
  function mouseClicked()
  {
  if(mouseX>=140 && mouseX<=270)
    {
    if(mouseY>=140 && mouseY<=300)
      {
      clicked = true;
      }
    }
  }
