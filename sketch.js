
 var car,wall;
 var speed,weidth;

//var wall,thickness;

//var bullet,speed,weight;

function setup() {
  createCanvas(1500,400);

   speed=random(55,90);
 weidth=random(400,1500);
   car = createSprite(50, 200, 50, 50);
   wall = createSprite(1000, 200, 60, width/2);
  car.shapeColor= ("white");
 car.velocityX=speed;
car.velocityX=+10;
// thickness = random(22,83);

// wall = createSprite(1200,200,thickness,height/2);
// bullet = createSprite(50,200,50,50);
// speed = random(223,321);
// weight = random(30,52);

}

function draw() {
  background(0);  
  
    //car.x=World.mouseX;
    //car.y=World.mouseY;

 if (wall.x-car.x < (car.width+wall.width)/2)
 {
 car.velocityX=0;
 var deformation = 0.5 * weidth * speed* speed/22509;
 if (deformation>180)
 {
 car.shapeColor=color(225,0,0);
 }
 if (deformation<180 && deformation>100)
 {
 car.shapeColor=color(230,230,0);
 }
 if (deformation<100)
 {
 car.shapeColor= color(0,225,0);
 }
 }
 else{
   car.shapeColor= ("white");
 }


// bullet.x=World.mouseX;
// bullet.y=World.mouseY;
// if (hasCollide(bullet,wall))
// {
// bullet.velocityX = 0;
// var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
// if(damage>10)
// {
// wall.shapeColor = color(335,0,0);
// }

// if (damage<10){
//   wall.shapeColor = color(0,225,0);
// }

// }

 drawSprites();
// }

// function hasCollide(lbullet,lwall)
// {

// bulletRightEdge = lbullet.x +lbullet.width;
// wallLeftEdge = lwall.x;
// if (bulletRightEdge>=wallLeftEdge)
// {
// return true;
// }
// return false;
 }
