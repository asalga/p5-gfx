let sheetImage,
  spriteSheet,
  sprite;

function preload() {
  sheetImage = loadImage('assets/sheet.png');
}

function setup() {
  createCanvas(640, 480);
  noCursor();

  spriteSheet = new SpriteSheet();
  spriteSheet.load(sheetImage, 'assets/sheet.json');
  
  sprite = spriteSheet.get('out');
}


function draw() {
  background(100);
  image(sprite, mouseX, mouseY);
}
