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

var blueeyes;
var BlueEyes;
var fruit;
var fruit_options;
var rope;
var ground;

var rope2;
var con;
var con2;
var button;
var button2
var background;
var higherground;
var canH;
var canW;
var Fruit
var bubble_img;
var bg_img;
var fruit_con;
//var balloon;
var food;
function preload()
{
  
  BlueEyes = loadImage("Blue eyes.png")
  Fruit = loadImage("fruit.png")
 
 // balloon = loadImage("balloon.png")
  bg_img = loadImage("background.png")
}
function setup() {
  
  
  
  
    createCanvas(900,900);
  
 
  engine = Engine.create();
  world = engine.world;
  
   var fruit_options = {
    restitution: 0.8
  }
  
  ground =new Ground(250,height-10,width,20);
  fruit = Bodies.circle(100,400,15,fruit_options);
  World.add(world,fruit);
  
  rope = new Rope(8,{x:40,y:30});
  
 // blueeyes sprite
 // blink.frameDelay = 20;
 // eat.frameDelay = 20;
  blueeyes = createSprite(270,750,100,100);
  blueeyes.addImage(BlueEyes);
  blueeyes.scale = 0.3;
  higherground =new Ground(300,170,100,10);
  
  fruit = createSprite(270,150,100,100);
  fruit.addImage(Fruit);
  fruit.scale=0.05
  /*bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.addAnimation('crying',sad);
  bunny.changeAnimation('blinking');*/
  fruit_con = new Link(rope,fruit);
  Matter.Composite.add(rope.body,fruit);

  //btn 1
  button = createImg('cut_btn.png');
  button.position(20,30);
  button.size(50,50);

  button2 = createImg('cut_btn.png');
  button2.position(30,420);
  button2.size(50,50);

 // button2.Clicked(drop);
  
 // button2.mousePress(drop);
  
  //button2.mouseClick(drop);

  //button2.mouseClicked(drop);

  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  Engine.update(engine);
  
  push();
  imageMode(CENTER);
  rope.show();

  ground.show();
  higherground.show();
  

  ellipse(fruit.position.x,fruit.position.y,20,20)
  
  drawSprites();

}

function drop()
{
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

