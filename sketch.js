const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,ground



function setup() {
  createCanvas(400,400);
  engine=Engine.create() // We are creating a physics engine here
  world=engine.world // We connected the world to the engine
  var ground_options={
    //json ground
    isStatic:true
  }
  
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground); // added ground to the world
 
  var ball_options={
    //json object
    restitution:1

  }
  ball=Bodies.circle(200,200,20,ball_options)
  World.add(world,ball); //added ball to the world

  
}

function draw() {
  background(0); 
  fill(255) 
  Engine.update(engine); // we are running the engine
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); //drawing the obejct
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}