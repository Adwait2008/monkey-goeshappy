var monkey,monkey_img;
var banana,banana_img;
var stone,stone_img;
var jungle,jungle_img;
var invGround;
    
    function preload(){
monkey_img = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
      
  jungle_img = loadImage("jungle.jpg");

  banana_img = loadImage("banana.png");

  stone_img = loadImage("stone.png");

    
    }
function setup() {
  createCanvas(400, 400);
  jungle = createSprite(200,150);
  jungle.addImage(jungle_img);
 jungle.scale =1.2

 
  invGround = createSprite(width / 2, 390, width, 10);
  invground.visible = false;


  monkey = createSprite(80, 340);
  monkey.addAnimation("monkeyimg", monkeyimg);
  monkey.scale = 0.13;


  score = 0;

  gamestate = 1;
  PLAY = 1;
  END = 0;
  
  bananagrp = new Group();
  stonegrp = new Group();
  
}

function draw() {
  background(220);
    if (gamestate === PLAY) {
 
    
     jungle.velocityX = -5;

    if ( jungle.x < 0) {
       jungle.x =  jungle.width / 2;
    }

   
 if (keyWentDown("space") && monkey.collide(invgGround)) {
      monkey.velocityY = -20;
    }

    
    monkey.velocityY = monkey.velocityY + 1;

    bananas();
    stone();

    
    score = score + Math.round((getFrameRate() / 30));

  }

   if (stonegrp.isTouching(monkey)) {
    stonegrp.destroyEach();
    monkey.scale = 0.13;
    score = score - 100;
 
  }
  monkey.collide(invGround);


  if (gamestate === END) {
    jungle.velocityX = 0;

    stonegrp.setVelocityXEach(0);
    stonegrp.setLifetimeEach(-1);

    bananagrp.setVelocityXEach(0);
    bananagrp.setLifetimeEach(-1);

    monkey.velocityY = 0; 
  
  
    } 
  
  drawSprites();
}

function stone(){
  if (frameCount%80===0){
    var stone = createSprite(width,360);
    stone.addImage("stone_img",stone_img);
    stone.scale = 0.18;
    stone.velocityX=-6;
   stone.lifetime=130;
    stonegrp.add(stone);
  }
}

function bananas(){
  if (frameCount%125===0){
    var banana =createSprite(width+30,random(220,350));
    banana.addImage("banana_img",banana_img);
    banana.scale=0.06;
    banana.velocityX=-8;
    banana.lifetime=130;
    bananagrp.add(banana);
  }
}