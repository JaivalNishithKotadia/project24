
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cover1,cover2,cover3;
var ground1;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	
	
	cover1=new Cover(1000,550,200,20);
	cover2=new Cover(1090,490,20,100);
	cover3=new Cover(910,490,20,100);
	ground1= new Ground(600,570,1200,20);
	paper1= new Paper(80,450);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  cover1.display();
  cover2.display();
  cover3.display();
  ground1.display();
  paper1.display(); 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
   }
   }


