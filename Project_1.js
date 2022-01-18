let ex = 0;
let r = 0;
let sc = 0;
let cl = 0;
let clicked1 = false;
let clicked2 = false;
let o = 0;
let t = 0;
let ymove = 200;



function setup()
{
createCanvas(400, 400);
}



function draw()
{
  if (t < 2)
    {
    drawbackground();
    body();
    drawNormalFace()
    steve(320,400,0.6)
    if(clicked1 == true && ymove < 400)
    {
      zombieHead(320, ymove, 0.6);
      ymove++;
    }
    if(ymove == 400)
      zombieHead(320, 400, 0.6);
    }
  else if(o%6 == 0)
      {
    drawbackground();
    body();
    steve(320,400,0.6)
    if(clicked1 == true && ymove < 400)
    {
      zombieHead(320, ymove, 0.6);
      ymove++;
    }
    explosion()
      }
    if(ymove == 400)
        zombieHead(320, 400, 0.6);
   o++;
}



function drawbackground()
{ 
  background(160, 216, 254);
  noStroke();

  //clouds
  fill(255);
  rect(100, 25, 50, 50);
  rect(250, 50, 80, 40);
 
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
  
  //dirt
  fill(132, 79, 45);
  quad(0, 400, 0, 320, 400, 320, 400, 400);	

  //grass
  fill(74, 171, 64);
  quad(0, 320, 400, 320, 400, 300, 0, 300);

}



function body()
{
  push();
  scale(0.5)
  translate(60,210)
  
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
  
  //red tie
  fill(200,0,0)
  quad(206,430, 190,395, 206,350, 220, 395)
  quad(206,333, 190,350, 206,370, 220,350)
  pop();
}



function drawNormalFace()
{
  push();
  translate(132,215)
  scale(0.6 + sc)
  fill(255, 215 - r, 163 - r)
  strokeWeight(1)
  
  //ears
  ellipse(65, 0, 25, 50)
  ellipse(-65, 0, 25, 50)
  
  //head
  ellipse(0,0, 130, 160)
  
  //eyes
  push();
  scale(1+sc)
  fill(255, 255, 255)
  ellipse(-25, -12, 15, 15)
  ellipse(25, -12, 15, 15)
  fill(0,0,0)
  ellipse(-22, -12, 6, 6)
  ellipse(27, -12, 6, 6)
  pop();
  
  //nose
  fill(255, 215 - r, 163 - r)
  stroke(0)
  strokeWeight(2)
  arc(0,10, 20, 20, 0, PI)
  
  //mouth
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
  
  if(clicked2 == true)
    {
      if(r<=180)
        {
        r = r + 1.2;
        sc = sc + 0.0011;
        }
    }
}



function steve(x, y, s){

	push();
	translate(x, y);
	scale(s);

	//legs
	noStroke();
	fill(70, 58, 165);
	quad(-50, 0, 50, 0, 50, -150, -50, -150);
	strokeWeight(3);
	stroke(67, 54, 157);
	line(0, 0, 0, -150);

	//feet
	noStroke();
	fill(107, 107, 107);
	quad(-50, 0, -50, -25, 50, -25, 50, 0);

	//chest
	fill(0, 175, 175);
	quad(-50, -150, -50, -300, 50, -300, 50, -150);

	//right arm
	fill(170, 125, 102);
	quad(50, -150, 50, -300, 100, -300, 100, -150);
	fill(0, 175, 175);
	quad(50, -300, 100, -300, 100, -250, 50, -250);

	//left arm
	fill(170, 125, 102);
	quad(-50, -150, -50, -300, -100, -300, -100, -150);
	fill(0, 175, 175);
	quad(-50, -300, -100, -300, -100, -250, -50, -250);

	//head
	fill(170+r, 125, 102);
	quad(-50, -300, -50, -400, 50, -400, 50, -300);

	//smile
	fill(69, 34, 14);
	quad(-25, -300, -25, -325, -12.5, -325, -12.5, -300);
	quad(25, -300, 25, -325, 12.5, -325, 12.5, -300);
	quad(-25, -300, -25, -312.5, 25, -312.5, 25, -300);

	//nose
	fill(106, 64, 48);
	quad(-12.5, -325, -12.5, -337.5, 12.5, -337.5, 12.5, -325);

	//eyes
	fill(255, 255, 255);
	quad(-37.5, -337.5, -37.5, -350, -12.5, -350, -12.5, -337.5);
	quad(37.5, -337.5, 37.5, -350, 12.5, -350, 12.5, -337.5);

	fill(19, 25, 172);
	quad(-25, -337.5, -25, -350, -12.5, -350, -12.5, -337.5);
	quad(25, -337.5, 25, -350, 12.5, -350, 12.5, -337.5);

	//hair
	fill(51, 36, 17);
	quad(-50, -400, 50, -400, 50, -375, -50, -375);
	quad(-50, -375, -50, -362.5, -37.5, -362.5, -37.5, -375);
	quad(50, -375, 50, -362.5, 37.5, -362.5, 37.5, -375);
  
  if(clicked2 == true)
    {
      if(r<=180)
        {
        r = r + 1.2;
        sc = sc + 0.0011;
        }
    }
  
	pop();
}



function zombieHead(x, y, s)
{
	push();
	translate(x, y);
	scale(s);

	//head
	noStroke();
	fill(134, 197, 20);
	quad(-50, -300, -50, -400, 50, -400, 50, -300);

	//eyes
	fill(255, 255, 255);
	quad(-37.5, -337.5, -37.5, -350, -12.5, -350, -12.5, -337.5);
	quad(37.5, -337.5, 37.5, -350, 12.5, -350, 12.5, -337.5);
	pop();
}



  function mouseClicked()
  {
    if(mouseX>200 && mouseY>200)
      clicked1 = true;
    
    if(mouseX>80 && mouseX<180 && mouseY>160 && mouseY<260 && clicked1 == true)
      {
      clicked2 = true;
      t++;
      }
  }



function explosion()
{
  noStroke();
  for (let j = 0; j<30 ; j++)
    {
      fill(random(90,255), random(0,50), random(0,50))
      ellipse(random(80,180),random(160,260), random(10,40))
    }
}




