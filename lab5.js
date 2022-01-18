// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, leg, beak;

var neckDown = true;
var wingDown = false;
var legLeft = true;
var beakR = true;
var animate = false;

// normal set up
function setup() 
{
   createCanvas(400, 400);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   leg = 0;
   beak = 0;
}

// normal draw
function draw() 
{
   background(12, 245, 216);

   //foreground
   fill(78, 155, 16);
   rect(0, height/2, width, height/2);
  
   //bushes
  fill(50,100,50)
  ellipse(100,300,50,60)
  ellipse(120,300,50,60)
  ellipse(140,300,50,60)
  
  //tree
  push();
  fill('#FFFF00')
  ellipse(20,20,90,90)
  fill(50,100,50)
  translate(0,-40)
  triangle(240,190, 370,190, 300, 60)
  fill('#964B00')
  rect(290,190,30,80)
  pop();


   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30);
  
      //right leg
      push();
      translate(6,8)
      rotate(leg)
      rect(-1,0,3,20)
      triangle(2,20, -6,21, -7,17)
      pop();
    
      //left leg
      push();
      translate(-4,8)
      rotate(-leg)
      rect(-1,0,3,20)
      triangle(2,20, -6,21, -7,17)
      pop();
  
      fill(245,226,12)

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
         fill(155, 111, 16);
  
      //upper beak
      push();
        translate(-4,-18)
        rotate(beak)
        fill(155, 111, 16);
        triangle(-6,0,  0,-3,  0,0);
      pop();
  
      //lower beak
      push();
        translate(-4,-18)
        rotate(-beak)
        fill(155, 111, 16);
        triangle(-6,0,  0,3,  0,0);
      pop();
  
  pop();
      

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown) 
   {
      neckR -= PI/30;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/10;
   } 
   else 
   {
      wingR += PI/10;
   }
  
  if (leg > PI/4) 
   {
      legLeft = true;
   } 
   if (leg < -PI/4) 
   {
      legLeft = false;
   }

   // depending on which way we need to rotate, do so
   if (legLeft) 
   {
      leg -= PI/160;
   } 
   else 
   {
      leg += PI/160;
   }
  
  
  if (beak > PI/5) 
   {
      beakR = true;
   } 
   if (beak < 0) 
   {
      beakR = false;
   }

   // depending on which way we need to rotate, do so
   if (beakR) 
   {
      beak -= PI/130;
   } 
   else 
   {
      beak += PI/130;
   }
   
}