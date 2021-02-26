
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(830,100,260,25)
	bob1 = new Bob(720,400,25)
	bob2 = new Bob(775,400,25)
	bob3 = new Bob(830,400,25)
	bob4 = new Bob(885,400,25)
	bob5 = new Bob(940,400,25)

	rope1 = new SlingShot(bob1.body,{x:720,y:100})
	rope2 = new SlingShot(bob2.body,{x:775,y:100})
	rope3 = new SlingShot(bob3.body,{x:830,y:100})
	rope4 = new SlingShot(bob4.body,{x:885,y:100})
	rope5 = new SlingShot(bob5.body,{x:940,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-50})
	}
}



