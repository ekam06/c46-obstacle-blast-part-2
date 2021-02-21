const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
var time=120


function preload(){
heartI=loadImage("h.png")

}
function setup(){

createCanvas(1550,700)


o1=createSprite(100,0,20,800)
o1.shapeColor=("red")

o2=createSprite(200,600,30,400)
o2.shapeColor=("yellow")

o3=createSprite(150,100,100,30)
o3.shapeColor=("pink")

o4=createSprite(130,580,110,20)
o4.shapeColor=("orange")

o5=createSprite(10,500,110,20)
o5.shapeColor=("grey")

o6=createSprite(140,290,230,30)
o6.shapeColor=("purple")

o7=createSprite(360,280,30,220)
o7.shapeColor=("blue")

o8=createSprite(370,540,170,20)
o8.shapeColor=("white")

o10=createSprite(380,575,10,180)
o10.shapeColor=("lightGreen")

o11=createSprite(270,600,110,20)
o11.shapeColor=("lightBlue")

o12=createSprite(285,420,20,120)
o12.shapeColor=("white")

o13=createSprite(240,190,120,15)
o13.shapeColor=("red")

o14=createSprite(290,80,10,120)
o14.shapeColor=("lightBlue")

o15=createSprite(200,195,10,80)
o15.shapeColor=("red")


m1=new Obstacle(600,200,100,150)
m2=new Obstacle(750,200,100,150)
m3=new Obstacle(900,200,100,150)
m4=new Obstacle(600,400,100,150)
m5=new Obstacle(750,400,100,150)
m6=new Obstacle(900,400,100,150)

for (var i=700;i<800;i=i+45){
  heart=createSprite(i,550,20,20)
  heart.addImage(heartI)
  heart.scale=0.015

}
}
function draw(){

  background("black")
  fill ("white")
  text (mouseX+","+mouseY,mouseX,mouseY)


drawSprites()

fill("red")
textFont("Broadway")
textSize(40)
text ('MEMORY CARDS',570,50)

textFont("Copper Black")
textSize(30)
text ("Lives-",570,560)

textFont("Copper Black")
textSize(30)
text ("Time Left = " + time +" seconds",570,600)

if(frameCount%30===0){
  time=time-1
}
}
