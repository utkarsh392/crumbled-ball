
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	ground= new Ground(200,650,100000,20)
	box1 = new Box(730, 550, 50, 200);
	box2 = new Box(520, 550, 50, 200);
	box3 = new Box(625, 625, 260, 50);
	ball1= new Ball(80,100,20,20)
	
	

	
	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background("pink");
 
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball1.display();
  
  
  

  
  
 


  
  
 
  
  
 
 
  drawSprites();
  
 
}

function keyPressed() {
	if (keyCode === 32) {
	   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:450,y:-450})
	   
	 }
   }


