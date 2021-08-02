var lion1,lion2,lion3,lion4,lion5,lion6,lion7,lion8,lion9,lion10,lion11,lion12,lion13;
var lion1Img,lion2Img,lion3Img,lion4Img,lion5Img,lion6Img,lionImg7,lion8Img,lion9Img,lion10Img,lion11Img,
lion12Img,lion13Img;
var background1,background2;
var background1Img,background2Img;
var food,hole,stone,foodImg,holeImg,stoneImg;
var END=0;
var PLAY=1;
var gameState=PLAY;
var gameOver,restart;
var score=0;
var p
function preload(){

lion1Img=loadAnimation("lion1.png","lion2.png","lion3.png","lion4.png","lion5.png","lion6.png","lion7.png","lion8.png","lion9.png","lion10.png","lion11.png","lion12.png","lion13.png");


background1Img=loadImage("background1.jpg");
background2Img=loadImage("background2.jpg");

foodImg=loadImage("food.png");
holeImg=loadImage("hole.png");
stoneImg=loadImage("stone.png");


}


function setup() {
  createCanvas(displayWidth,displayHeight-150);
 
  
background2=createSprite(width,height/2-10);
background2.addImage(background2Img);
background2.velocityX = -5;
background2.scale=4
background2.visible=false
lion=createSprite(width/2-500,height-100);
  lion.addAnimation("lionrunning",lion1Img);
  lion.scale=2.5;
  lion.visible=false
  background1=createSprite(100,190);
  background1.visible=false;
form=new Form() 


}

function draw() {
  background(background1Img);
  
  if(background2.x<200){
    background2.x=width/2

    }
    if(keyDown("r")){
      lion.visible=true
      p.hide()
    }

form.display()

 drawSprites();

 
}