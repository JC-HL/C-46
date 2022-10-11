var bg;
var player, player_img, player_mov;
var computer, computer_img, computer_mov;

function preload(){
bg= loadImage("court.png");

player_mov= loadAnimation("player1.png", "player2.png", "player3.png", "player4.png")
player_img= loadImage("player1.png");

computer_mov= loadAnimation("computer1.png", "computer2.png", "computer3.png", "computer4.png")
computer_img= loadImage("computer1.png");
}

function setup(){
  createCanvas(1000, 570)

  player = createSprite(300, 400, 100, 100)
  player.addAnimation("me", player_mov)
  player.addImage("player", player_img);
  player.changeImage("player")
  player.scale=0.7;


  computer= createSprite(700, 400, 100, 100);
  computer.addImage("AI", computer_img);

  computer.scale= 0.7;

}

function draw(){
  background("white");
  background(bg);
  if(keyDown(LEFT_ARROW)){
  player.x-=3
  } 

  if(keyDown(RIGHT_ARROW)){
    player.x+=3
    }

    if(keyWentDown("SPACE")){
      player.changeAnimation("me");

    }

  

  drawSprites()
}

function keyPressed(){
  if(keyCode=== 32){
    player.changeAnimation("me");
  }
}

function keyReleased(){
  if(keyCode=== 32){
    player.changeImage("player");
  }
}