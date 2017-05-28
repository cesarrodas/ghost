var bgImg;
var ghosty;
var ghost_sprite_sheet;
var ghost_float;

// var player_frames = [
//   {"name": "ghost_walks01", "frame":{"x":0, "y":0, "width": 400, "height": 400}},
//   {"name": "ghost_walks02", "frame":{"x":400, "y":0, "width":400, "height": 400}}
// ];

function preload(){
  //ghost_sprite_sheet = loadSpriteSheet('ghost_sprite.png', player_frames);
  ghost_sprite_sheet = loadSpriteSheet('ghost_sprite.png', 400, 400, 2);

  ghost_float = loadAnimation(ghost_sprite_sheet);
}

function setup(){
  // 1000, 600
  createCanvas(window.innerWidth, window.innerHeight);
  bgImg = loadImage("./graveyard_night.png");

  ghosty = createSprite(0, 0, 200, 200);
  ghosty.addAnimation("normal", ghost_float);
}

function draw() {
  background(255, 255, 255);

  fill(0);

  image(bgImg, 0, 0);

  ghosty.position.x = mouseX;
  ghosty.position.y = mouseY;

  ghosty.changeAnimation("normal");
  ghosty.scale = .5;

  drawSprites();
}
