const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution:1,
		friction:0,
		density:0.8	
	  }

	ball1 = Bodies.circle(320,380,20,ball_options);
	  World.add(world,ball1);

	// circle1 =Bodies.circle(320,380,20,circle_options);
	// World.add(world,circle1);  

	rope1=new rope(ball1,roof,-80, 0)




	//   con = Matter.Constraint.create({
	// 	pointA:{x:300,y:100},
	// 	bodyB:ball,
	// 	pointB:{x:0,y:0},
	// 	length:100,
	// 	stiffness:0.1
	//   });
	//   World.add(world,con);

	//   con = Matter.Constraint.create({
	// 	pointA:{x:330,y:100},
	// 	bodyB:ball2,
	// 	pointB:{x:0,y:0},
	// 	length:100,
	// 	stiffness:0.1
	//   });

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  
  //create ellipse shape for multiple bobs here

 ellipseMode(RADIUS);
 ellipse(ball1.position.x,ball1.position.y,10,10);
//  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
