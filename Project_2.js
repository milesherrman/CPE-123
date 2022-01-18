var loc, dir;
var left, up;
var leg, arm1;
var animate = true;
let legR = true;
let armR1 = true;
let dimUp = true

function setup() {
  createCanvas(400, 400);
  leg = 0;
  arm1 = 0;
  up = 0;
}

function draw() 
{  
  background(220);
  
  
  push();
  if(millis() <= 6000)
    {
    background1()
    steve(350,325,0.3)
    }
if(millis() < 4000 && millis() > 1000)
      {
       fill(0);
         textSize(20);
          text('Maybe if I find some diamonds,', 20, 20);
          text('I will get a minecraft girlfriend!', 20, 40);
      }

  
  if(millis() >= 6000)
    {
    background2()
    steve(800,320,0.3)
    }
if(millis() >= 6000 && millis() < 8000)
  {
    fill(0);
    text('Look! Diamonds!', 20, 40);
  }

  
  if(millis() >= 9600)
    {
      animate = false;
      leg=0;
      pop();
      background2()
      steveNoMove(165,320,0.3)
      swingAxe()
      if(millis() >= 10600)
      pickAxe(120, 250, 0.15, -3.5 + 1.7*arm1)
      fill(0);
      text('Good thing I am a GAMER!', 20, 40);
      
    }
  
  if(millis() >= 14300)
    {
      clear();
      background2()
      fill(160, 216, 254)
      strokeWeight(0)
      rect(51,219,51,51)
      strokeWeight(1)
      arm1 = 0;
      steveNoMove(165,320,0.3)
      diamondOre(75, 245, 0.1);
      dimHover();
      fill(0);
      text('Don’t waste your diamond on a hoe!', 20, 40); 
    }
      
  
  if(animate)
    {
      animateSteve();
    }
  


}
/*
function mousePressed() 
  {
   animate = !animate;
  }
*/

function background1()
  {
    background(160, 216, 254)
    noStroke();
    push();
    translate(310, 320);
    
    //tree 1
    fill(169, 145, 101);
    rect(0, 0, 30, -120);
    fill(66, 166, 63);
    rect(70, -120, -110);
    
    pop();
  //dirt
  fill(132, 79, 45);
  quad(0, 400, 0, 320, 400, 320, 400, 400); 

  //grass
  fill(74, 171, 64);
  quad(0, 320, 400, 320, 400, 300, 0, 300);

  //clouds
  fill(255);
  rect(200, 25, 50, 50);
  rect(150, 125, 80, 40);
    
    push();
    translate(50, 300);
    //tree 2
    fill(169, 145, 101);
    rect(0, 0, 30, -120);
    fill(66, 166, 63);
    rect(70, -120, -110);

    pop();
  
  }

function stone(x, y)
{
  push();
  translate(x, y);
  stroke(1.2);
  fill(104, 104, 104);
  rect(0, 0, 50, 50);
  pop();
  
}

  function background2()
  {
  background(160, 216, 254)
  noStroke();

  //dirt
  fill(132, 79, 45);
  quad(0, 400, 0, 320, 400, 320, 400, 400); 

  //grass
  fill(74, 171, 64);
  quad(0, 320, 400, 320, 400, 300, 0, 300);

  //clouds
  fill(255);
  rect(300, 25, 50, 50);
  rect(250, 125, 80, 40);
  
    //stone wall
    stone(0, 270);
    diamond(50, 220);
    diamond(0,220);
    stone(0, 170);
    stone(50, 270);
  
  }

  function steve(x, y, s)
{   
  push();
    translate(x - millis()/15, y);
    
  scale(s);

  //left leg
    push();
    translate(-25,-125);
    rotate(-leg)
  noStroke();
  fill(70, 58, 165);
    rect(-25,-25, 50,125)
    fill(107, 107, 107);
    rect(-25,100,50,25)
    pop();

  //right leg
    push();
    translate(25,-125)
    rotate(leg)
  noStroke();
  fill(70, 58, 165);
    rect(-25,-25, 50,125)
    fill(107, 107, 107);
    rect(-25,100,50,25)
    pop();
    
  //chest
  fill(0, 175, 175);
  quad(-50, -150, -50, -300, 50, -300, 50, -150)
    
    //right arm
  push();
    translate(75,-275)
    rotate(-0.5*leg)
  fill(170, 125, 102);
  quad(-25, 125, -25, -25, 25, -25, 25, 125);
  fill(0, 175, 175);
  quad(-25, -25, 25, -25, 25, 25, -25, 25);
    pop();

  //left arm
  push();
    translate(-75,-275)
    rotate(-0.5*leg)
    rotate(0.9*arm1)
  fill(170, 125, 102);
    rect(-25, 25, 50, 100)
  fill(0, 175, 175);
    rect(-25, -25, 50, 50)
    pop();
  
  //head
  fill(170, 125, 102);
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
  
  
  pop();
}

function steveNoMove(x, y, s)
{   
  push();
    translate(x,y)
  scale(s);

  //left leg
    push();
    translate(-25,-125);
    rotate(-leg)
  noStroke();
  fill(70, 58, 165);
    rect(-25,-25, 50,125)
    fill(107, 107, 107);
    rect(-25,100,50,25)
    pop();

  //right leg
    push();
    translate(25,-125)
    rotate(leg)
  noStroke();
  fill(70, 58, 165);
    rect(-25,-25, 50,125)
    fill(107, 107, 107);
    rect(-25,100,50,25)
    pop();
    
  //chest
  fill(0, 175, 175);
  quad(-50, -150, -50, -300, 50, -300, 50, -150)
    
    //right arm
  push();
    translate(75,-275)
    rotate(-0.5*leg)
  fill(170, 125, 102);
  quad(-25, 125, -25, -25, 25, -25, 25, 125);
  fill(0, 175, 175);
  quad(-25, -25, 25, -25, 25, 25, -25, 25);
    pop();

  //left arm
  push();
    translate(-75,-275)
    rotate(-0.5*leg)
    rotate(0.9*arm1)
  fill(170, 125, 102);
    rect(-25, 25, 50, 100)
  fill(0, 175, 175);
    rect(-25, -25, 50, 50)
    pop();
  
  //head
  fill(170, 125, 102);
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
  
  
  pop();
}


function diamond(x, y)
{
  push();
  translate(x, y);
  stroke(1.2);
  fill(104, 104, 104);
  rect(0, 0, 50, 50);
  
  noStroke();
  fill(0, 205, 248);
  rect(20, 30, 10, 5);
  rect(10, 10, 5, 5);
  rect(15, 15, 5, 5);
  rect(20, 15, 5, 5);
  rect(30, 20, 5, 5);
  rect(7, 40, 5, 5);
  pop();
  
}

function diamondOre(x,y, scl)
{
push()
translate(x,y)
translate(0, up)
scale(scl)
   fill("#8cf4e2")
   for ( let x=0; x<60; x+=20)
      for(let i=0; i<80; i+=20)
      {
         rect(-40+i,-30+x, 20, 20)
      }
   fill('#2ccdb1')
    for ( let x=0; x<60; x+=20)
      for(let i=0; i<80; i+=20)
      {
         rect(-40+i,50+x, 20, 20)
      }

   fill('#209581')
      for(let i=0; i<80; i+=20)
      {
         rect(-40+i,30, 20, 20)
      }
   fill('#4aedd1')
   for ( let x=0; x<80; x+=20)
      for(let i=0; i<80; i+=20)
      {
         rect(-40+i,-110+x, 20, 20)
      }
   fill('#0c3730')
      for(let i=0; i<80; i+=20)
         {
            rect(-40+i,-130, 20, 20)
         }
      for(let i=0; i<120; i+=20)
         {
            rect(-60+i,110, 20, 20)
         }
      rect(-80, 90, 20,20)
      rect(-100, 70, 20,20)
      rect(-100, 50, 20,20)
      rect(-120, 30, 20,20)
      rect(-120, 10, 20,20)
      rect(-120, -10, 20,20)
      rect(-120, -30, 20,20)
      rect(-100, -50, 20,20)
      rect(-100, -70, 20,20)
      rect(-80, -90, 20,20)
      rect(-60, -110, 20,20)
      rect(60, 90, 20,20)
      rect(80, 70, 20,20)
      rect(80, 50, 20,20)
      rect(100, 30, 20,20)
      rect(100, 10, 20,20)
      rect(100, -10, 20,20)
      rect(80, -30, 20,20)
      rect(80, -50, 20,20)
      rect(60, -70, 20,20)
      rect(60, -90, 20,20)
      rect(40, -110, 20,20)
   fill('#209581')
   rect(-60, 90, 20,20)
   rect(40, 90, 20,20)
   rect(60, 70, 20,20)
   rect(80, 30, 20,20)
   fill('#1b7b6b')
   rect(-60, 70, 20,20)
   rect(-60, 50, 20,20)
   rect(40, 70, 20,20)
   rect(40, 50, 20,20)

   fill('#d1faf3')
   rect(-20, -50, 20, 20)
   rect(0, -50, 20, 20)
   rect(20, -50, 20, 20)
   fill('#2ccdb1')
   rect(60, 30, 20,20)
   rect(60, 50, 20,20)
   rect(40, 30, 20,20)
   fill('#4aedd1')
   rect(-80, 30, 20,20)
   rect(-80, 50, 20,20)
   rect(-60, 30, 20,20)
   rect(-80, 70, 20,20)
   pop()
}

function pickAxe(x, y, s, r)
{
  noStroke();
  push();
  translate(x, y)
  scale(s);
  rotate(r)
    
      //the middle line of the handle
      fill('#664b1c')
      for(let x = 0; x < 200; x = x+40)
      rect(0+x, -20-x, 20, 20)
      rect(220, -240, 20, 20)
      fill('#876526')
      for(let x = 0; x<160; x = x+40 )
      rect(20+x, -40-x, 20, 20)
      rect(200, -220, 20, 20)
  
      //the brown line of the handle
      fill('#473414')
      for(let i = 2; i<24; i = i + 2 )
      {
         rect(i*10, -10*i, 20, 20)
      }
  
      //the dark line of the handle
      fill('#271d0b')
      for(let i = 0; i<220; i = i + 20)
         rect(0+i, -40-i, 20, 20)
         fill('#2ac2a9')
         rect(180, -200, 20, 20)
         rect(160, -240, 20, 20)
         rect(220, -180, 20, 20)
         fill('#25af95')
         rect(200, -200, 20, 20)
         rect(200, -180, 20, 20)
         rect(180, -220, 20, 20)
         rect(160, -220, 20, 20)
         rect(220, -160, 20, 20)
         rect(220, -140, 20, 20)
         rect(140, -240, 20, 20)
         rect(120, -240, 20, 20)
         fill('#2ac2a9')
         rect(100, -240, 20, 20)
         rect(220, -120, 20, 20)
         fill('#32e7c8')
         rect(80, -240, 20, 20)
         rect(220, -100, 20, 20)
         fill("#0e3d35")
         rect(180, -240, 20, 20)
         rect(60, -240, 20, 20)
         rect(220, -80, 20 , 20)
         rect(220, -200, 20 , 20)
  
         for(let x =0; x<100; x = x+20)
            rect(160-x,-260, 20, 20)
         for(let x =0; x<80; x = x+20)
            rect(140-x,-220, 20, 20)
         for(let x =0; x<80; x = x+20)
            rect(200,-160+x, 20, 20)
         for(let x =0; x<100; x = x+20)
            rect(240,-180+x, 20, 20)
  pop();
   
  
}
function animateSteve()
  {
    
   if (leg > PI/6) 
   {
      legR = true;
   } 
    
   if (leg < -PI/6) 
   {
      legR = false;
   }

   if (legR) 
   {
      leg -= PI/160;
   } 
   else 
   {
      leg += PI/160;
   }
  }

function swingAxe()
{
  //loc.add(dir)
  
    if (arm1 > 1.5*PI/3) 
   {
      armR1 = true;
   } 
   if (arm1 < PI/3) 
   {
      armR1 = false;
   }

   if (armR1) 
   {
      arm1 -= PI/100;
   } 
   else 
   {
      arm1 += PI/100;
   }
 }


function dimHover()
{
  
    if (up < -10) 
   {
      dimUp = true;
   } 
   if (up > 4) 
   {
      dimUp = false;
   }

   if (dimUp) 
   {
      up += 0.5;
   } 
   else 
   {
      up -= 0.5;
   }
 }


