const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var billfrontImage,billbackImage,billleftImage,billrightImage;
var default_bill;
var bill;
var bgimage;
var edges;
var collider;

function preload()
{
	bgimage = loadImage("images/bg.jpg");
	default_bill = loadAnimation("images/defaultbill.png");
	billback_Image = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png");
	billleft_Image = loadAnimation("images/10.png","images/11.png","images/12.png","images/13.png","images/14.png","images/15.png","images/16.png","images/17.png","images/18.png");
	billfront_Image = loadAnimation("images/19.png","images/20.png","images/21.png","images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png");
	billright_Image = loadAnimation("images/28.png","images/29.png","images/30.png","images/31.png","images/32.png","images/33.png","images/34.png","images/35.png","images/36.png");
}

function setup() {
	createCanvas(900,500); 

	edges = createEdgeSprites();

	bill = createSprite(300,180);
	
	bill.addAnimation("default",default_bill);
	bill.addAnimation("default1",billback_Image);
	bill.addAnimation("default2",billleft_Image);
	bill.addAnimation("default3",billfront_Image);
	bill.addAnimation("default4",billright_Image);

	collider1 = createSprite(10,310,80,620);
	collider1.visible = false;
	collider2 = createSprite(845,310,25,620);
	collider2.visible = false;

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimage);

  if(keyDown("UP")){
	  bill.changeAnimation("default1",billback_Image);
	  bill.y = bill.y-6;
  }

  if(keyDown("DOWN")){
	bill.changeAnimation("default3",billfront_Image);
	bill.y = bill.y+6;
}

if(keyDown("LEFT")){
	bill.changeAnimation("default2",billleft_Image);
	bill.x = bill.x-6;
}

if(keyDown("RIGHT")){
	bill.changeAnimation("default4",billright_Image);
	bill.x = bill.x+6;
}

if(keyWentDown === true){
	bill.changeAnimation("default",default_bill)
}

bill.collide(edges);
bill.collide(collider1);
bill.collide(collider2);
  
  drawSprites();
}
