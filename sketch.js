var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function createApples(){
  apple = createSprite(random(50,350), 10, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 3
  apple.lifetime = 300
}

function createLeaves(){
  leaf = createSprite(random(50,350), 10, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.09;
  leaf.velocityY = 3
  leaf.lifetime = 300
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
  createApples();

}





function draw() {
  var select_sprites = Math.round(random(1,2))
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else{
      createLeaves()
    }
  }

  drawSprites();
}

