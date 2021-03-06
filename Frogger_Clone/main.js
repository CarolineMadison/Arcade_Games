var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//pull sprite sheet into file and store in variable
//understanding setting the coordinates of a sprite sheet https://youtu.be/d-O5rYbJjr4
var frogger = new Image(); 
frogger.src = "frogger.png"

//initialize variables to place clip sprite from sheet and place on correct x,y coordinates on the background
var sx = 0;
var sy = 0;
var swidth = 52;
var sheight = 80;
var x = 50;
var y = 415;
var width = 50;
var height = 75;

//-----> BUTTONS <-----//
//initialize button values = booleans
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
//We want the player to have to press then release then press again for movement, so the frog won't move continuously if a key is held down. 
var up = true;
var down = true;
var right = true;
var left = true;

//event listeners for key presses on buttons
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//When we press a key down, this information is stored in a variable. The relevant variable in each case is set to true. When the key is released, the variable is set back to false.
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    if(e.keyCode == 37) {
        leftPressed = true;
    }
    if(e.keyCode == 38) {
        upPressed = true;
    }
    if(e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 38) {
        upPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = false;
    }
}

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
    //clearRect will clear the canvas and redraw the frog with each execution of draw function
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    drawFrog();
    //conditional to move frog up on key press
    if (upPressed == true && up == true) {
        y = y - 44;
        up = false;
    }
    if (upPressed == false) {
        up = true;
    }
    //conditional to move frog down on key press
    if (downPressed == true && down == true) {
        y = y + 44;
        down = false;
    }
    if (downPressed == false) {
        down = true;
    }
    //conditional to move frog right on key press
    if (rightPressed == true && right == true) {
        x = x + 44;
        right = false;
    }
    if (rightPressed == false) {
        right = true;
    }
    //conditional to move frog left key press
    if (leftPressed == true && left == true) {
        x = x - 44;
        left = false;
    }
    if (leftPressed == false) {
        left = true;
    }

    requestAnimationFrame(draw);
}

draw();

