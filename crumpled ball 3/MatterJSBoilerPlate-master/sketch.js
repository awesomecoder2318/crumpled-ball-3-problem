const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,bin1,bin2,bin3;
var engine, world;
var ground1, edges;
var dusty
function preload()
{

}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
  
  ground1 =new Ground(400,500,1000,0.1, )
 ground1.shapeColor=color(10,0,10)

 bin1=new Dustbin(500,320,0,0)
 paper1=new Paper(10,10,40,40);
 

	Engine.run(engine);
  
}


function draw(){
  background(255);
  Engine.update(engine);

  paper1.display();
  ground1.display();
  bin1.display();


 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1500,y:5000})
  }
}


