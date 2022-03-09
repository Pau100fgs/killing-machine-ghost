var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost= createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
}

function draw() {
  background(200);
  drawSprites();
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")) {
    ghost.velcoityY=-5

    }

    if(keyDown("right")){
    ghost.x=ghost.x+3
    }

    if(keyDown("left")){
    ghost.x=ghost.x-3
    
    }
    ghost.velocityY=ghost.velocityY+0.8
}
