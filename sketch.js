
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola_de_pedra;
var solo;

var fundoImg;
var obstaculo;
var indiana_jones, indianaImg;

function preload(){

  indianaImg = loadImage("indiana jones game.gif");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  indiana_jones = createSprite(50,50,50,50);
  indiana_jones.addAnimation(indianaImg);
  indiana_jones.setCollider('circle', 0, 0, 350)
  indiana_jones.scale = 0.08
}


function draw() {
  indiana_jones.debug=true
  background("blue");
  Engine.update(engine);
  
  drawSprites();
}

