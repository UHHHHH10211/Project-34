//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  dog_image=loadImage("Dog.png");
  dog_image=loadImage("happydog.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200);
  dog=loadImage("Dog.png");
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
  
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS)
}

  drawSprites();
  //add styles here
  text("Press up arrow to feed doggy milk");

}



function readStock(data){
  foodS=data.val();
}



function writeStock(x){
  if (x<=0) {
    x=0
    
  }else{
    x=x-1;
  }
    database.ref('/').update({
    Food:x
  })
}