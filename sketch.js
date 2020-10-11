
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, ground1
var boy1, mango1
function preload()
{

	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree1 = new tree()
ground1 = new ground()
boy1 = new boy()
mango1 = new mango()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  ground1.display()
  tree1.display();
  mango1.display();

 
  drawSprites();
 
}



