var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//pull sprite sheet into file and store in variable
//understanding setting the coordinates of a sprite sheet https://youtu.be/d-O5rYbJjr4
var frogger = new Image(); 
frogger.src = "frogger.png"
//initialize variables to draw images

var sx = 0;
var sy = 0;
var swidth = 52;
var sheight = 80;
var x = 50;
var y = 415;
var width = 50;
var height = 75;


//In order to animate, we need to wrap the background in a timing function that will update the canvas on each frame. This is how we can change sprite positions.

function drawBackground() {

    //draw two strips of grass
    ctx.fillStyle = "lime";
    ctx.fillRect(0, 440, 570, 45);
    ctx.fillRect(0, 220, 570, 45);

    //draw dashed lane boundary
    //The line starts at x = 0 and y = 395 and ends at x = 570 and y = 395.
    ctx.beginPath();
    ctx.moveTo(0, 395);
    ctx.lineTo(570, 395);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    //draw bottom solid road boundary
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(570, 350);
    ctx.strokeStyle = "white";
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();

    //draw top dashed lane boundary
    ctx.beginPath();
    ctx.moveTo(0, 305);
    ctx.lineTo(570, 305);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    //draw water
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 570, 220)
}

function drawFrog() {
    ctx.drawImage(frogger, sx, sy, swidth, sheight, x, y, width, height);
}

//This function will call drawBackground() and requestAnimationFrame().  
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

function draw() {
    drawBackground();
    drawFrog();
    requestAnimationFrame(draw);
}

draw();

