var movingRect,fixedRect,car,wall;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(800,200,80,20);
  movingRect.shapeColor='blue';
  fixedRect.shapeColor='blue';
  car=createSprite(400,200,50,50);
  car.shapeColor='blue';
  car.velocityX=2;
  wall=createSprite(800,200,50,100);
  wall.shapeColor='green';
}

function draw() {
  background(255,255,255);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);

  // if(isTouching(car,wall)){
  //   car.velocityX=0;
  //   textSize(50);
  //   text("stop",600,400);
  // }

  bounceOff(car,wall);
  drawSprites();
}
