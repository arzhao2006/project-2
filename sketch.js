var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 80, 20);
  thickness = random(22, 83);
  wall = createSprite(600, 450, thickness, 800);

  speed = random(230, 320);
  weight = random(30, 52);

 
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  if (wall.x-bullet.x<(bullet.width/2 + wall.width/2)){
    bullet.velocityX = 0;
    bullet.x = 550;
    var deformation =( 0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation<10){
      textSize(30)
      text("protected ",100, 50);
      bullet.shapeColor = ("green");
    }
    if(deformation>10){
      bullet.shapeColor = ("red");
      textSize(30)
      text("unprotected ",100, 50);
    }
  }

  drawSprites();
 
}