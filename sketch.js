
var tom,tom_img,tom_img2,tom_img3
var jerry, jerry_img ,jerry_img2,jerry_img3
function preload() {
    //load the images here
tom_img2 = loadAnimation("images/cat1.png")
tom_img = loadAnimation("images/cat2.png","images/cat3.png")
tom_img3 = loadAnimation("images/cat4.png")
bg_img = loadImage ("images/garden.png")
jerry_img2 = loadAnimation ("images/mouse2.png","images/mouse3.png")
jerry_img = loadAnimation ("images/mouse1.png")
jerry_img3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(950,690)
tom.addAnimation ("cat",tom_img2)
tom.scale = 0.1

jerry = createSprite(90,700)
jerry.addAnimation("mouse",jerry_img)
jerry.scale = 0.1
}

function draw() {

    background(bg_img);
    //Write condition here to evalute if tom and jerry collide
   if (tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX =0 
       tom.addAnimation("cat3",tom_img3)
       tom.changeAnimation("cat3")
       tom.x = 180
       jerry.addAnimation("mouse3",jerry_img3)
       jerry.changeAnimation ("mouse3")
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if  (keyCode  === LEFT_ARROW){
   
    tom.velocityX = tom.velocityX-5

    tom.addAnimation("cat2",tom_img)
    tom.changeAnimation("cat2")
    jerry.addAnimation("mouse2",jerry_img2)
    jerry.frameDelay = 30
    jerry.changeAnimation("mouse2")
}


}
