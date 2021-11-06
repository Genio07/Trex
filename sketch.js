function setup() {
  createCanvas(800,400);
  rectangulo = createSprite(400, 200, 50, 50);
  rectangulo.shapeColor = "blue";

  rectangulo2 = createSprite(400, 100, 25, 25);
  rectangulo2.shapeColor = "blue";
  
}

function draw() {
  background(255,255,255);  

  rectangulo2.x = World.mouseX;
  rectangulo2.y = World.mouseY;

  console.log(rectangulo.x-rectangulo2.x);

  if(rectangulo2.x-rectangulo.x < rectangulo2.width/2+rectangulo.widht/2){
    rectangulo.shapeColor = "yellow";
    rectangulo2.shapeColor = "yellow";
  }
  else{
    rectangulo.shapeColor = "blue";
    rectangulo2.shapeColor = "blue";
  }

  

  drawSprites();

}