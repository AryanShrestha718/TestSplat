var points;
var gameState = 0;
var playerCount = 0;
var title;
var game = new Game();
function preload() {
splat_red = loadImage("Splat_Red.png");
splat_green = loadImage("Splat_Green.png");
backgroundImage = loadImage("Background.jpg")
}
function setup() {
canvas = createCanvas(windowWidth, windowHeight);
game.start();
database = firebase.database();
}
function draw() {
background(backgroundImage);
if (playerCount == 2) {
    game.update(1);
}
if (gameState == 1) {

}
}