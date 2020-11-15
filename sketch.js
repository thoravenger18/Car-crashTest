var wall;
var car;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(100,200,30,30);

  car.velocityX = speed;

  car.shapeColor = "white";
 
  wall =createSprite(1000, 200, 60, height/2);
  wall.shapeColor = "grey";
}

function draw() {
  background("black"); 
  
  if(wall.x-car.x < car.width/2 + wall.width/2)
  {
    car.veloctiyX = 0;
  
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      car.shapeColor = "green";
    }
  }
  
  
  
  
  
  drawSprites();
}