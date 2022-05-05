const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var ground;


function setup(){
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  ground = Bodies.rectangle(250,690,500,20,{isStatic: true});
  World.add(world,ground);

}

function draw(){
  background(50);
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,500,20);
  

}




