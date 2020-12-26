const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper, Ground, Dustbin;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world
  
 Ground = new ground(400,650);

 Dustbin = new dustbin(500,600);
	
 Paper = new paper(100,600,7);

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
 
  Paper.display();
  Ground.display();
  Dustbin.display();

  drawSprites();
 
}