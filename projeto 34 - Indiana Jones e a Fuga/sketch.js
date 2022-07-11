
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola_de_pedra;
var solo;

var fundoImg;
var obstaculo, obstaculoImg;
var indiana_jones, indianaImg;

function preload(){

  indianaImg = loadImage("indiana jones game.gif");
  fundo = loadImage("fundo jogo indiana.png");
  obstaculoImg = loadImage("obstaculo_do_jogo.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  indiana_jones = createSprite(400, 600, 100, 100);
  indiana_jones.addImage("indianaImg",indianaImg);
  indiana_jones.setCollider('circle', 0, 0, 350)
  indiana_jones.scale = 0.5

  obstaculo = createSprite(600, 600, 100, 100)
  obstaculo.addImage("obstaculoImg", obstaculoImg)
  obstaculo.setCollider('circle', 0, 0, 350)
  obstaculo.scale = 1.7


  solo = new Solo(width / 2, height - 10, width, 20);
  World.add(world, this.solo)
}


function draw() {
  // indiana_jones.debug=true
  background(fundo);
  Engine.update(engine);
  solo.show();
  drawSprites();

  image("solo do jogo.png", solo.position.x, solo.position.y, largura, altura);
}

