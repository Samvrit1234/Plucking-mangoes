
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var boyimage = loadImage("Plucking + mangoes\Plucking mangoes/boy.png")
	var boy
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy = createSprite(820,100,50,50);
    boy = boy.addImage("boyimage/boy.png")
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



