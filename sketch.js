//Create variables here
var  dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
normalDog=loadImage("images//dogImg.png");
happyDog=loadImage("images//dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200,300,10,10);
  dog.addImage(normalDog);
  dog.scale = 0.5;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  fill("red");
  textSize(20);
  text("number of food:"+foodS,200,100);

  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1;
    if(foodS<0){
      foodS = 0;
    }
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })

  
}


