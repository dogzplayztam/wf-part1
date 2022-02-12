const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var stage,stageimg;
var steve,steveimg;
function preload()
{
  stageimg = loadImage("stage.jpg");
  steveimg = loadImage("steve.png");
}

function setup() {
  createCanvas(1000,600);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  stage = createSprite(500,300,10,100)
  stage.addImage(stageimg)
  stage.scale = 0.6

  steve = createSprite(500,475,10,100)
  steve.addImage(steveimg)
  steve.scale = 0.3;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  

   drawSprites();
}



