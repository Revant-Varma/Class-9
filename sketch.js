var box

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,30)
}


function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x+=2
  }
  if(keyDown(UP_ARROW)){
    box.y-=2
  }
  if(keyDown(DOWN_ARROW)){
    box.y+=2
  }
  if(keyDown(LEFT_ARROW)){
    box.x-=2
  }
drawSprites()
}




