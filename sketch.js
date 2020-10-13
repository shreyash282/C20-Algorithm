var fixedRect,movingRect;

function setup()
{
  createCanvas(400,400);

  fixedRect = createSprite(150,200,30,100);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX = -5


  movingRect = createSprite(20,200,80,20);
  movingRect.shapeColor = "blue";
  movingRect.velocityX = 5
}

function draw()
{
  background("pink");

  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){

    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow"
  }
  else
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue"
  
  }*/

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
    {
      movingRect.velocityX =  movingRect.velocityX *(-1)
      fixedRect.velocityX =  fixedRect.velocityX *(-1)
    }
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 )
    {
      movingRect.velocityY =  movingRect.velocityY *(-1)
      fixedRect.velocityY =  fixedRect.velocityY *(-1)
    }
  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}