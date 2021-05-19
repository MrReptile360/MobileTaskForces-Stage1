var bg,bgImg
var MTF,MTFImg;

function preload(){
    bgImg=loadImage("background.jpg");
    MTFImg=loadImage("Mobile Task Forces Image.png");
}

function setup(){

createCanvas(1000,600);
bg=createSprite(100,250,40,20);
bg.addImage("background", bgImg);
bg.scale=5;
bg.velocityX=-2;


MTF=createSprite(100,400,40,20);
MTF.addImage("MTFImage", MTFImg);
MTF.scale=1.5;

}

function draw(){

background("white");
console.log(bg.x);

if(bg.x<-280){
    bg.x=width/2;
}

drawSprites();

}