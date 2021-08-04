const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1 , base2 ; 
var boy;
var Compboy;

function preload(){
  base1 = loadImage("./assets/base1.png");
  boy = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

 base2 = new ComputerBase(200,500,200,200);
 base1 = new PlayerBase(1000,500,200,200);
 boy = new player(1000,325,100,200);
 Compboy = new ComputerPlayer(200,325,100,200)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
 base2.display();
 base1.display();
   //display Player and computerplayer
 boy.display();
 Compboy.display();
}
