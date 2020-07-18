var player1,villain,edges;
var backgroundImg,captinamericaimg,thanosimg,lazerimg,looseimg,lazers;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  backgroundImg=loadImage("background.jpg"); 
  //captinamericaimg = loadImage("captin.png");
  //thanosimg=loadImage("Thanos.png");
  lazerimg=loadImage("/images/lazer.png")
  playerimg = loadImage("/images/captin.png")
  looseimg=loadImage("/images/looses.png");
}
function setup(){
  //canvas is created
  canvas=createCanvas(1600,800)

  //player1 is created
  player1 = new player(200,590,200,200);
  player1.sprite.addImage("play",playerimg);
  player1.sprite.addImage("loose",looseimg);
 
  player1.depth = 1;
  
  lazersgroup= new Group();
  
  
  villain = new Villians(1300,300,200,200);
    randomVel();




}
function draw(){
  background(backgroundImg);
  if(gameState===PLAY){
    spawnlazers();
    if(lazersgroup.collide(player1.sprite)){
      gameState=END
    }
  }
  else if(gameState===END){
picture();
  }
  edges = createEdgeSprites();
 player1.movement();
 player1.sprite.depth =1;
    //player1.display();
    villain.display();
    
  player1.sprite.debug = true;
    
    console.log(player1.sprite.depth);
   
      
       
      
 
  drawSprites();
}

function randomVel()
{
    villain.velocityY = random(-7,7);
}

function spawnlazers(){
  if(frameCount % 40 === 0) {
    var lazers = createSprite(1060,200,10,10);
lazers.depth=1;
    lazers.addToGroup(lazersgroup);
    //lazers.visible=true;
    lazers.debug =true;
    lazers.x=villain.x;
    lazers.y=villain.y;
    lazers.addImage(lazerimg)
    lazers.velocityX = -6;
    
    //console.log(lazers.depth);
    
  }

  }

  function picture()
  {
    player1.sprite.changeImage("loose");
    lazersgroup.removeSprites();
    lazersgroup.setVelocityXEach(0);
  }


