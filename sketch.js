
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImage;
var ground;
var box1; 
var box2;
var box3;
var dustbinImage;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
	//Create the Bodies Here.
    paper= new Paper(200,200,20) 
   ground= new Ground(200,700,2000,20) 
   box1= new Box(500,610,20,100);
   box2 = new Box(700,610,20,100)
   box3 = new Box(600,650,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW)
  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-65});
}


