var player, triangle, circle, hexagon, finalBoss,treasure,wall1,wall2,wall3
function setup() {
   player = createSprite(200,200,10,10);
   wall1 = createSprite(300,100,20,20);
   wall2 = createSprite(100,50,5,5);
   
}
function draw() {
    background("black");
    wall1.shapeColor=("grey");
    wall2.shapeColor=("grey");
    
    if(keyDown("up")){
        player.velocityX = 0;
        player.velocityY = -3;
      }
      if(keyDown("down")){
        player.velocityX = 0;
        player.velocityY = 3;
      }
      if(keyDown("right")){
        player.velocityX = 3;
        player.velocityY = 0;
      }
      if(keyDown("left")){
        player.velocityX = -3;
        player.velocityY = 0;
      }
      
    
      drawSprites();

}
function preLoad() {

}

